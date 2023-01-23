<script>
  import { searchedTerm } from "../stores/notes.js";
</script>

<input
  type="search"
  name="search"
  id=""
  bind:value={$searchedTerm}
  placeholder="Search notes"
  class="border block w-full rounded-full text-sm px-3 py-1 outline-none focus:border-gray-500"
/>
