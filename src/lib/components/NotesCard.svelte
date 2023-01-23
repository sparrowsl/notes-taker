<script>
  import dayjs from "dayjs";
  import { fade } from "svelte/transition";

  export let note;
</script>

<a href="/note/{note.id}" transition:fade>
  <div class="bg-[#F7F7F7] rounded-lg shadow-sm p-3">
    {#if note.title}
      <h3 class="font-semibold mb-1 text-gray-800">{note.title}</h3>
    {/if}
    {#if note.content}
      <p
        class="{!note.title
          ? 'font-semibold'
          : ''} text-sm text-gray-800 truncate"
      >
        {note.content}
      </p>
    {/if}
    <small class="text-xs text-gray-400 mt-3 block">
      {dayjs(note.date).format("MMMM DD, YYYY - hh:mm A")}
    </small>
  </div>
</a>
