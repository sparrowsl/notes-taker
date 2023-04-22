<script>
	import { searchedTerm } from "../stores/notes.js";
</script>

<input
	type="search"
	name="search"
	bind:value="{$searchedTerm}"
	placeholder="Search notes"
	class="border rounded-full outline-none text-sm w-full py-1 px-3 block focus:border-gray-500"
/>
