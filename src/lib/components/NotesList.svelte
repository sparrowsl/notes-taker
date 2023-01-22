<script>
  import { nanoid } from "nanoid";
  import NotesCard from "./NotesCard.svelte";

  const notes = [
    {
      id: nanoid(),
      title: "Lorem ipsum dolor sit.",
      content: "this is a small note...",
      date: new Date(),
    },
    {
      id: nanoid(),
      title: "Lorem ipsum dolor sit amet.",
      content: "this is a small note...",
      date: new Date(),
    },
  ];
</script>

<section class="mt-5">
  <!-- <div class="flex">
    <h2>Notes</h2>
    <p>{notes.length}</p>
  </div> -->

  <article class="flex flex-col gap-3">
    {#each notes as note (note.id)}
      <NotesCard {note} />
    {/each}
  </article>
</section>
