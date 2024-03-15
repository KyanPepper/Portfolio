<script>
  import { slide } from "svelte/transition";
  import githubLogo from "$lib/imgs/githublogo.png";
  import youtubeLogo from "$lib/imgs/Red-YouTube-logo.png";
  import webLogo from "$lib/imgs/weblogo.png";
  import dropdownIcon from "$lib/imgs/dropdown.png";

  // @ts-ignore
  /**
   * @type {any[]}
   */
  export let TechImgs = [];
  export let Title = "";
  export let About = "";
  export let Frontend = "";
  export let Backend = "";
  export let GhUrl = "";
  export let YtUrl = "";
  export let DeployedUrl = "";
  let isDropdownOpen = false;
  function conditionalDropdown() {
    if (isDropdownOpen) {
      isDropdownOpen = !isDropdownOpen;
    }
  }
  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
</script>

<div class="flex justify-center pt-5 border-b border-white">
  <div class="text-center">
    <h1 class="text-center text-4xl font-sans text-white">
      {Title}
    </h1>
    <div class="flex justify-center items-center py-2 space-x-5">
      {#each TechImgs as img}
        <img src={img} alt="Tech Image" class="w-9 h-9" aria-hidden="true" />
      {/each}
    </div>

    <div class="flex justify-center mt-2 space-x-3">
      <a href={GhUrl} class="flex items-center">
        <img
          src={githubLogo}
          alt="GitHub Logo"
          class="w-8 h-8"
        />
        <span class="text-lg font-sans text-white">View on Github</span>
      </a>
      <a href={YtUrl} class="flex items-center">
        <img
          src={youtubeLogo}
          alt="YouTube Logo"
          class="w-9 h-6"
        />
        <span class="text-lg font-sans text-white">View on Youtube</span>
      </a>
      {#if DeployedUrl != ""}
        <a href={DeployedUrl} class="flex items-center">
          <img src={webLogo} class="w-8 h-8" />
          <span class="text-lg font-sans text-white">Try it Out</span>
        </a>
      {/if}
    </div>

    <div class=" text-white font-sans text-lg pt-2 pb-5">
      <button
        type="button"
        class="inline-flex justify-center rounded-md focus:ring-2 focus:ring-stone-500"
        on:click={toggleDropdown}
      >
        <div class="outline flex items-center text-left">
          About
          <img src={dropdownIcon} alt="menu" class="h-2 ml-1" />
        </div>
      </button>
      {#if isDropdownOpen}
        <div class="mt-2" transition:slide>
          <p class="text-lg pb-4">{About}</p>
          {#if Backend != ""}
            <h1 class="text-lg">Backend</h1>
            <p class="text-lg">{Backend}</p>
          {/if}
        </div>
        <div class="mt-2">
          {#if Backend != ""}
            <h1 class="text-lg">Frontend</h1>
            <p class="text-lg">{Frontend}</p>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>
