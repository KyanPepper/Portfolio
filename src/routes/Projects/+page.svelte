<script>
  import { onMount, createEventDispatcher } from "svelte";
  import ProjectCard from "$lib/Assets/ProjectCard.svelte";
  import { ProjectCards } from "./ProjectData";

  const dispatch = createEventDispatcher();
  let currentIndex = 0;

  function goToPrevious() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = ProjectCards.length - 1;
    }
    dispatch("updateIndex", currentIndex);
  }

  function goToNext() {
    if (currentIndex < ProjectCards.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    dispatch("updateIndex", currentIndex);
  }
</script>

<div
  id="controls-carousel"
  class=" flex justify-between items-center w-full h-max"
  data-carousel="static"
>
  <!-- Previous Button -->
  <button
    on:click={goToPrevious}
    type="button"
    class="tablet:flex hidden relative top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev
  >
    <span
      class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
    >
      <svg
        class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span class="sr-only">Previous</span>
    </span>
  </button>

  <!-- Project Card -->
  <div
    class="relative hidden tablet:flex justify-center items-center h-full w-8/12 py-5 drop-shadow-2xl"
  >
    <ProjectCard {...ProjectCards[currentIndex]} />
  </div>

  <!-- Next Button -->
  <button
    on:click={goToNext}
    type="button"
    class="tablet:flex hidden realtive top-0 end-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-next
  >
    <span
      class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
    >
      <svg
        class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span class="sr-only">Next</span>
    </span>
  </button>
</div>

<!--Project Card Mobile-->
<div
  class="justify-center w-full tablet:hidden items-center h-full pt-5 drop-shadow-2xl"
>
  <ProjectCard {...ProjectCards[currentIndex]} />
</div>

<div
  id="controls-carousel"
  class=" py-5 flex tablet:hidden justify-between items-center w-full h-max fixed bottom-0"
  data-carousel="static"
>
  <!-- Previous Button -->
  <button
    on:click={goToPrevious}
    type="button"
    class="flex relative top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev
  >
    <span
      class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
    >
      <svg
        class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span class="sr-only">Previous</span>
    </span>
  </button>

  <!-- Next Button -->
  <button
    on:click={goToNext}
    type="button"
    class="flex realtive top-0 end-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-next
  >
    <span
      class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
    >
      <svg
        class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span class="sr-only">Next</span>
    </span>
  </button>
</div>
