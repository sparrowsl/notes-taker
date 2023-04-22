<script>
	import { fade } from "svelte/transition";
	import dayjs from "dayjs";

	export let note;
</script>

<a href="/note/{note.id}" in:fade>
	<div class="rounded-lg bg-#F7F7F7 shadow-sm p-3">
		{#if note.title}
			<h3 class="font-semibold mb-1 text-gray-800">{note.title}</h3>
		{/if}
		{#if note.content}
			<p class="{!note.title ? 'font-semibold' : ''} text-sm text-gray-800 truncate">
				{note.content}
			</p>
		{/if}
		<small class="mt-3 text-xs text-gray-400 block">
			{dayjs(note.date).format("MMMM DD, YYYY - hh:mm A")}
		</small>
	</div>
</a>
