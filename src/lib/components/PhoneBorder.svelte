<main class="h-screen grid place-content-center">
  <section
    class="bg-white border-gray-700 border-8 rounded-3xl h-[calc(100vh-2vh)]
  shadow-md shadow-gray-200 w-[360px] overflow-y-scroll overflow-x-hidden pb-4 px-3"
  >
    <slot />
  </section>
</main>

<style>
  section::-webkit-scrollbar {
    display: none;
  }
</style>
