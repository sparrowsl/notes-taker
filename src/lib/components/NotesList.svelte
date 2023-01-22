<script>
  import NotesCard from "./NotesCard.svelte";
  import { notes } from "../stores/notes.js";

  // $: $notes = getNotes();
</script>

<section class="mt-1">
  <!-- <div class="flex">
    <h2>Notes</h2>
    <p>{notes.length}</p>
  </div> -->

  <article class="flex flex-col gap-3">
    {#each $notes as note}
      <NotesCard {note} />
    {:else}
      <p class="text-gray-500 text-sm">No notes found...</p>
    {/each}
  </article>
</section>
