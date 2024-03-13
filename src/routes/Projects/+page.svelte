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

<div class="tablet:flex hidden h-screen">
  <!-- Left side images -->
  <div class="flex items-start justify-center w-1/2 pt-10">
    <div class="w-5/6 h-5/6 relative">
      <img
        src={ProjectCards[currentIndex].img1}
        title="img1"
        alt="img1"
        class=""
      />
      {#if ProjectCards[currentIndex].img2 != ""}
        <img
          src={ProjectCards[currentIndex].img2}
          title="img2"
          alt="img2"
          class=""
        />
      {/if}
    </div>
  </div>

  <div class="flex justify-center w-1/2 pt-10">
    <div class="text-center">
      <h1 class="text-center text-4xl font-sans text-white">
        {ProjectCards[currentIndex].Title}
      </h1>

      <div class="flex justify-center mt-2 space-x-3">
        <a href={ProjectCards[currentIndex].GhUrl} class="flex items-center">
          <img src="src/lib/imgs/githublogo.png" class="w-8 h-8" />
          <span class="text-lg font-sans text-white">View on Github</span>
        </a>
        <a href={ProjectCards[currentIndex].YtUrl} class="flex items-center">
          <img src="src/lib/imgs/Red-YouTube-logo.png" class="w-9 h-6" />
          <span class="text-lg font-sans text-white">View on Youtube</span>
        </a>
        {#if ProjectCards[currentIndex].DeployedUrl != ""}
          <a
            href={ProjectCards[currentIndex].DeployedUrl}
            class="flex items-center"
          >
            <img src="src/lib/imgs/weblogo.png" class="w-8 h-8" />
            <span class="text-lg font-sans text-white">Try it Out</span>
          </a>
        {/if}
      </div>
      <div class=" text-white font-sans">
        <h1 class="text-lg">About</h1>
        <p class="text-base text-left">{ProjectCards[currentIndex].About}</p>
      </div>
      {#if ProjectCards[currentIndex].Backend != ""}
        <div class=" text-white font-sans">
          <h1 class="text-lg">Backend</h1>
          <p class="text-base text-left py-1">
            {ProjectCards[currentIndex].Backend}
          </p>
        </div>
        <div class=" text-white font-sans">
          <h1 class="text-lg">Frontend</h1>
          <p class="text-base text-left">
            {ProjectCards[currentIndex].Frontend}
          </p>
        </div>
      {/if}
      <div class="absolute bottom-0 right-1/4 translate-x-10">
        <button
          class="bg-orange-500 hover:bg-orange-400 text-white font-sans font-bold py-2 px-4 rounded"
          on:click={goToNext}
        >
          Next
        </button>
      </div>
    </div>
  </div>
</div>
