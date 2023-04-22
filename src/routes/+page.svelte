<script>
	import "@unocss/reset/tailwind.css";
	import "uno.css";
	import AddNote from "$lib/components/AddNote.svelte";
	import NotesList from "$lib/components/NotesList.svelte";
	import SearchNotes from "$lib/components/SearchNotes.svelte";
	import { getNotes, filtered, searchedTerm } from "$lib/stores/notes.js";

	$: if ($searchedTerm) {
		$filtered = getNotes().filter(
			(n) => n.title?.includes($searchedTerm) || n.content?.includes($searchedTerm)
		);
	} else {
		$filtered = getNotes();
	}
</script>

<!-- Header -->
<header class="bg-white py-8 top-0 sticky">
	<h1 class="font-semibold text-xl mb-2 text-gray-700">Notes Taker</h1>

	<!-- Search for notes -->
	<SearchNotes />
	<small class="my-2 text-xs text-right text-gray-400 block">
		{$filtered.length} notes
	</small>
</header>

<!-- Display all notes -->
<NotesList notes="{$filtered}" />

<!-- Show Add button -->
<AddNote />
