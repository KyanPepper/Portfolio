<script>
  // @ts-nocheck

  import { onMount, createEventDispatcher } from "svelte";
  import MobileProjectCard from "$lib/Assets/MobileProjectCard.svelte";
  import { ProjectCards } from "./ProjectData";
  import githubLogo from "$lib/imgs/githublogo.png";
  import youtubeLogo from "$lib/imgs/Red-YouTube-logo.png";
  import webLogo from "$lib/imgs/weblogo.png";

  let isDropdownOpen = false;

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

<!---Desktop-->

<div class="tablet:flex justify-center items-center h-screen hidden flex-col">
  <div
    class="w-5/6 h-5/6 tablet:flex hidden border border-white bg-stone-900 justify-center items-center"
  >
    <!-- Left side images -->
    <div class="flex items-start justify-center w-1/2">
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
    <!---Right side-->
    <div class="flex justify-center w-1/2">
      <div class="text-center">
        <h1 class="text-center text-3xl font-sans text-white">
          {ProjectCards[currentIndex].Title}
        </h1>
        <div class="flex justify-center items-center py-2 space-x-5">
          {#each ProjectCards[currentIndex].TechImgs as img}
            <img src={img} class="w-7 h-7" />
          {/each}
        </div>
        <div class="flex justify-center mt-2 space-x-3">
          {#if ProjectCards[currentIndex].GhUrl != ""}
          <a href={ProjectCards[currentIndex].GhUrl} class="flex items-center">
            <img src={githubLogo} class="w-8 h-8" />
            <span class="text-lg font-sans text-white">View on Github</span>
          </a>
          {/if}
          {#if ProjectCards[currentIndex].YtUrl != ""}
          <a href={ProjectCards[currentIndex].YtUrl} class="flex items-center">
            <img src={youtubeLogo} class="w-9 h-6" />
            <span class="text-lg font-sans text-white">View on Youtube</span>
          </a>
          {/if}
          {#if ProjectCards[currentIndex].DeployedUrl != ""}
            <a
              href={ProjectCards[currentIndex].DeployedUrl}
              class="flex items-center"
            >
              <img src={webLogo} class="w-8 h-8" />
              <span class="text-lg font-sans text-white">Try it Out</span>
            </a>
          {/if}
        </div>
        <div class=" text-white font-sans">
          <h1 class="text-base">About</h1>
          <p class="text-sm text-left">{ProjectCards[currentIndex].About}</p>
        </div>
        {#if ProjectCards[currentIndex].Backend != ""}
          <div class=" text-white font-sans">
            <h1 class="text-base">Backend</h1>
            <p class="text-sm text-left py-1">
              {ProjectCards[currentIndex].Backend}
            </p>
          </div>
          <div class=" text-white font-sans">
            <h1 class="text-base">Frontend</h1>
            <p class="text-sm text-left">
              {ProjectCards[currentIndex].Frontend}
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="tablet:flex hidden justify-center pt-5">
    <button
      on:click={goToNext}
      class="bg-orange-500 hover:bg-orange-400 text-white font-sans font-bold py-2 px-4 rounded button"
    >
      Previous
    </button>
    <div class="w-10"></div>
    <button
      on:click={goToPrevious}
      class="bg-orange-500 hover:bg-orange-400 text-white font-sans font-bold py-2 px-8 rounded button"
    >
      Next
    </button>
  </div>
</div>

<!---Mobile-->

<div class="tablet:hidden h-screen">
  {#each ProjectCards as card}
    <MobileProjectCard
      Title={card.Title}
      TechImgs={card.TechImgs}
      GhUrl={card.GhUrl}
      YtUrl={card.YtUrl}
      DeployedUrl={card.DeployedUrl}
      About={card.About}
      Backend={card.Backend}
      Frontend={card.Frontend}
      img1={card.img1}
      img2={card.img2}
    />
  {/each}
</div>
