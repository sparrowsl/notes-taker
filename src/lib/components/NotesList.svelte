<script>
  import { nanoid } from "nanoid";
  import NotesCard from "./NotesCard.svelte";

  const notes = [
    {
      id: nanoid(),
      title: "Lorem ipsum dolor sit.",
      content: "this is a small note...",
      date: "4 january 2023",
    },
    {
      id: nanoid(),
      title: "Lorem ipsum dolor sit amet.",
      content: "this is a small note...",
      date: "5 january 2023",
    },
  ];
</script>

<section class="mt-3">
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
