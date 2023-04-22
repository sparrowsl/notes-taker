<script>
	import dayjs from "dayjs";
	import { nanoid } from "nanoid";
	import { notes, saveNotes } from "$lib/stores/notes.js";

	let title;
	let content;

	function addNote() {
		const note = {
			id: nanoid(),
			title,
			content,
			date: new Date(),
		};
		$notes = [...$notes, note];
		saveNotes($notes);
	}
</script>

<svelte:head>
	<link href="https://unpkg.com/css.gg@2.0.0/icons/css/arrow-left.css" rel="stylesheet" />
	<link href="https://unpkg.com/css.gg@2.0.0/icons/css/check-o.css" rel="stylesheet" />
</svelte:head>

<form action="" method="POST" on:submit|preventDefault="{addNote}">
	<!-- Header -->
	<header class="bg-white flex py-8 top-0 gap-5 sticky items-center">
		<a href="/" class="text-blue-400/60 block"><i class="gg-arrow-left"></i></a>
		<legend class="font-semibold text-xl text-gray-700">Note</legend>

		{#if title || content}
			<button type="submit" class="ml-auto mr-2 text-gray-400 block">
				<i class="gg-check-o"></i>
			</button>
		{/if}
	</header>

	<span class="text-xs mb-4 text-gray-600 block">
		{dayjs(new Date()).format("MMMM DD, YYYY - hh:mm A")}
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
		class="outline-none text-sm w-full min-h-[400px] text-gray-700 resize-none focus:caret-blue-500"
	></textarea>
</form>

<style>
	textarea::-webkit-scrollbar {
		display: none;
	}
</style>
