<script>
  import "../app.css";
  import NotesList from "../lib/components/NotesList.svelte";
  import SearchNotes from "../lib/components/SearchNotes.svelte";
</script>

<!-- Header -->
<header class="border-3 py-4">
  <h1 class="font-semibold text-xl text-gray-700">Notes Taker</h1>
</header>

<!-- Search for notes -->
<SearchNotes />

<!-- Display all notes -->
<NotesList />
