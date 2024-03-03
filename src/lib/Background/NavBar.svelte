<script lang="js">
  import "../../app.css";
  let isDropdownOpen = false;
  import { slide } from 'svelte/transition';
  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
</script>

<nav class="w-full h-32 sm:h-30 bg-stone-600 bg-opacity-5 outline">
  <div class="flex items-center justify-between h-full max-w-screen-lg mx-auto">
    <div class="text-stone-300 text-3xl font-sans flex items-center sm:pl-3 pl-2"> 
      Kyan   
      <img
        src="src\lib\imgs\orange-4235372_1280.png"
        alt="Orange"
        class="h-10 sm:h-15 ml-2"
      />
    </div>
    <div class="hidden sm:flex items-center space-x-4 justify-center"> 
      <a href="/" class="text-stone-300 text-2xl">Experience</a>
      <a href="/" class="text-stone-300 font-sans text-2xl">Projects</a>
      <a href="/" class="text-stone-300 font-sans text-2xl">Resume</a>
    </div>
    <div class=" flex items-center ml-auto sm:ml-28"> 
      <button type="button" class="inline-flex justify-center rounded-md outline outline-offset-8 text-2xl text-stone-300 font-sans" >
        Contact
      </button>
    </div>

    <div class="flex sm:hidden">
      <div class=" inline-flex">
   
          <button type="button" class=" pl-5 mr-2 inline-flex justify-center rounded-md focus:ring-2 focus:ring-stone-500" aria-expanded="{isDropdownOpen}" aria-haspopup="true" on:click={toggleDropdown}>
          <img src="src\lib\imgs\1200px-Hamburger_icon_white.svg.png" alt="menu" class="h-10 sm:h-15"/>
          </button>
      </div>
    </div>
  </div>
  {#if isDropdownOpen}
  <div class=" z-10` w-full bg-171414 outline shadow-lg pb-10 focus:outline-none" role="menu" transition:slide>
    <div>
      <a href="#" class="text-stone-300 block px-4 py-2 text-2xl hover:bg-gray-100">Experience</a>
      <a href="#" class="text-stone-300 block px-4 py-2 text-2xl hover:bg-gray-100">Projects</a>
      <a href="#" class="text-stone-300 block px-4 py-2 text-2xl hover:bg-gray-100">Resume</a>
    </div>
  </div>
{/if}
</nav>
