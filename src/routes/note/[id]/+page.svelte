<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import dayjs from "dayjs";
	import { notes, saveNotes } from "$lib/stores/notes.js";

	const currentNote = $notes.find((note) => note.id === $page.params.id);

	let title = currentNote.title;
	let content = currentNote.content;

	function deleteNote() {
		$notes = $notes.filter((note) => note.id !== $page.params.id);
		saveNotes($notes); // Save the notes to localStorage
		goto("/");
	}

	function updateNote() {
		// Update the note title and content
		currentNote.title = title;
		currentNote.content = content;
		currentNote.date = new Date();
		$notes = $notes; // Update the store
		saveNotes($notes); // Save the notes to localStorage
	}
</script>

<svelte:head>
	<link href="https://unpkg.com/css.gg@2.0.0/icons/css/arrow-left.css" rel="stylesheet" />
	<link href="https://unpkg.com/css.gg@2.0.0/icons/css/check-o.css" rel="stylesheet" />
	<link href="https://unpkg.com/css.gg@2.0.0/icons/css/trash.css" rel="stylesheet" />
</svelte:head>

<form action="" method="POST" on:submit|preventDefault="{updateNote}">
	<!-- Header -->
	<header class="bg-white flex py-8 top-0 gap-5 sticky items-center">
		<a href="/" class="text-blue-400 block"><i class="gg-arrow-left"></i></a>
		<legend class="font-semibold text-xl text-gray-700">Note</legend>

		<!-- Delete Note -->
		<button type="button" on:click="{deleteNote}" class="ml-auto text-red-500 block">
			<i class="gg-trash"></i>
		</button>
		<!-- Update Note -->
		<button type="submit" class="ml-5 text-blue-500 block">
			<i class="gg-check-o"></i>
		</button>
	</header>

	<span class="text-xs mb-4 text-gray-600 block">
		{dayjs(currentNote.date).format("MMMM DD, YYYY - hh:mm A")}
	</span>

	<input
		type="text"
		name="title"
		placeholder="Title"
		bind:value="{title}"
		class="font-bold outline-none mb-3 w-full text-gray-800 block focus:caret-blue-500"
	/>

	<textarea
		name="content"
		bind:value="{content}"
		placeholder="Note something down"
		class="outline-none text-sm w-full min-h-[400px] text-gray-700 whitespace-nowrap resize-none focus:caret-blue-500"
	></textarea>
</form>

<style>
	textarea::-webkit-scrollbar {
		display: none;
	}
</style>
