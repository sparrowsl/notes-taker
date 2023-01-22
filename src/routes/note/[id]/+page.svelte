<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import dayjs from "dayjs";
  import { notes, saveNotes } from "../../../lib/stores/notes.js";

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
  <link href="https://css.gg/arrow-left.css" rel="stylesheet" />
  <link href="https://css.gg/check-o.css" rel="stylesheet" />
  <link href="https://css.gg/trash.css" rel="stylesheet" />
</svelte:head>

<form action="" method="POST" on:submit|preventDefault={updateNote}>
  <!-- Header -->
  <header class="border-3 sticky top-0 bg-white py-8 flex items-center gap-5">
    <a href="/" class="text-blue-400 block"><i class="gg-arrow-left" /></a>
    <legend class="font-semibold text-xl text-gray-700">Note</legend>

    <!-- Delete Note -->
    <button
      type="button"
      on:click={deleteNote}
      class="block text-red-500 ml-auto"
    >
      <i class="gg-trash" />
    </button>
    <!-- Update Note -->
    <button type="submit" class="block ml-5 text-blue-500">
      <i class="gg-check-o" />
    </button>
  </header>

  <span class="text-xs text-gray-600 mb-4 block">
    {dayjs(currentNote.date).format("MMMM DD, YYYY - hh:mm A")}
  </span>

  <input
    type="text"
    name="title"
    placeholder="Title"
    bind:value={title}
    class="outline-none focus:caret-blue-500 font-bold text-gray-800 block mb-3 w-full"
  />

  <textarea
    name="content"
    bind:value={content}
    placeholder="Note something down"
    class="w-full whitespace-nowrap outline-none focus:caret-blue-500 text-sm text-gray-700 resize-none min-h-[400px]"
  />
</form>

<style>
  textarea::-webkit-scrollbar {
    display: none;
  }
</style>
