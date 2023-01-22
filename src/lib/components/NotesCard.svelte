<script>
  export let note;
</script>

<div class="bg-[#F7F7F7] rounded-md p-3">
  <h3 class="font-semibold mb-1">{note.title}</h3>
  <p class="text-sm text-gray-800">{note.content}</p>
  <small class="text-xs text-gray-400 mt-3 block">{note.date}</small>
</div>
