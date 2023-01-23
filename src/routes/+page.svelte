<script>
  import "../app.css";
  import AddNote from "../lib/components/AddNote.svelte";
  import NotesList from "../lib/components/NotesList.svelte";
  import SearchNotes from "../lib/components/SearchNotes.svelte";
  import { getNotes, filtered, searchedTerm } from "../lib/stores/notes.js";

  $: if ($searchedTerm) {
    $filtered = getNotes().filter((n) => n.title?.includes($searchedTerm));
  } else {
    $filtered = getNotes();
  }
</script>

<!-- Header -->
<header class="border-3 sticky top-0 bg-white py-8">
  <h1 class="font-semibold text-xl text-gray-700 mb-2">Notes Taker</h1>

  <!-- Search for notes -->
  <SearchNotes />
  <small class="text-xs text-gray-400 block text-right my-2">
    {$filtered.length} notes
  </small>
</header>

<!-- Display all notes -->
<NotesList notes={$filtered} />

<!-- Show Add button -->
<AddNote />
