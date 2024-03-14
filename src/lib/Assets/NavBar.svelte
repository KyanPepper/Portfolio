<script lang="js">
  import "../../app.css";
  export let isDropdownOpen = false;
  import { slide } from "svelte/transition";
  function conditionalDropdown() {
    if (isDropdownOpen) {
      isDropdownOpen = !isDropdownOpen;
    }
  }
  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
</script>

<nav class="relative w-full h-16 sm:h-30 bg-stone-600 bg-opacity-5 outline">
  <div class="flex items-center h-full max-w-screen-lg mx-auto">
    <a href="/" on:click={conditionalDropdown}>
      <div class="text-white text-3xl font-sans flex items-center">
        Kyan
        <img
          src="src\lib\imgs\orange-4235372_1280.png"
          alt="Orange"
          class="h-10 sm:h-15 ml-2"
        />
      </div>
    </a>
    <div class="hidden sm:flex items-center space-x-4 justify-center flex-grow">
      <a href="/Experience" class="text-white font-sans text-2xl">Experience</a>
      <a href="/Skills" class="text-white font-sans text-2xl">Skills</a>
      <a href="/Resume" class="text-white font-sans text-2xl">Resume</a>
    </div>
    <div class="ml-auto pr-2">
      <a href="/Projects">
        <button
          type="button"
          class="inline-flex justify-center rounded-md outline outline-offset-4 text-2xl text-white font-sans"
          on:click={conditionalDropdown}
        >
          Portfolio
        </button>
      </a>
    </div>

    <div class="flex sm:hidden">
      <div class="inline-flex pl-5 mr-2">
        <button
          type="button"
          class=" inline-flex justify-center rounded-md focus:ring-2 focus:ring-stone-500"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          on:click={toggleDropdown}
        >
          <img
            src="src\lib\imgs\1200px-Hamburger_icon_white.svg.png"
            alt="menu"
            class="h-10 sm:h-15"
          />
        </button>
      </div>
    </div>
  </div>
  {#if isDropdownOpen}
    <div
      class="z-50 w-full relative bg-stone-900 outline shadow-lg focus:outline-none"
      role="menu"
      transition:slide
    >
      <div>
        <a
          href="/Experience"
          class="text-stone-300 block px-4 py-2 text-2xl hover:bg-gray-100"
          on:click={toggleDropdown}>Experience</a
        >
        <a
          href="/Skills"
          class="text-stone-300 block px-4 py-2 text-2xl hover:bg-gray-100"
          on:click={toggleDropdown}>Skills</a
        >
        <a
          href="/Resume"
          class="text-stone-300 block px-4 py-2 text-2xl hover:bg-gray-100 z-50"
          on:click={toggleDropdown}>Resume</a
        >
      </div>
    </div>
  {/if}
</nav>
