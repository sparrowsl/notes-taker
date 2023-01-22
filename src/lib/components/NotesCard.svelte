<script>
  import dayjs from "dayjs";

  export let note;
</script>

<div class="bg-[#F7F7F7] rounded-lg shadow-sm p-3">
  <h3 class="font-semibold mb-1 text-gray-800">{note.title}</h3>
  <p class="text-sm text-gray-800">{note.content}</p>
  <small class="text-xs text-gray-400 mt-3 block"
    >{dayjs(note.date).format("MMMM DD, YYYY - hh:mm A")}</small
  >
</div>
