<script>
  import dayjs from "dayjs";
  import { nanoid } from "nanoid";
  import { notes, saveNotes } from "../../../lib/stores/notes.js";

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
  <link href="https://css.gg/arrow-left.css" rel="stylesheet" />
  <link href="https://css.gg/check-o.css" rel="stylesheet" />
</svelte:head>

<form action="" method="POST" on:submit|preventDefault={addNote}>
  <!-- Header -->
  <header class="border-3 sticky top-0 bg-white py-8 flex items-center gap-5">
    <a href="/" class="text-blue-400 block"><i class="gg-arrow-left" /></a>
    <legend class="font-semibold text-xl text-gray-700">Note</legend>

    {#if title || content}
      <button type="submit" class="block ml-auto mr-2 text-gray-400">
        <i class="gg-check-o" />
      </button>
    {/if}
  </header>

  <span class="text-xs text-gray-600 mb-4 block">
    {dayjs(new Date()).format("MMMM DD, YYYY - hh:mm A")}
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
    class="w-full outline-none focus:caret-blue-500 text-sm text-gray-700 resize-none min-h-[400px]"
  />
</form>

<style>
  textarea::-webkit-scrollbar {
    display: none;
  }
</style>
