<script>
	import NotesCard from "./NotesCard.svelte";

	export let notes;
</script>

<article class="flex flex-col gap-3">
	{#key notes}
		{#each notes as note (note.id)}
			<NotesCard note="{note}" />
		{:else}
			<p class="text-sm text-gray-500">No notes found...</p>
		{/each}
	{/key}
</article>
