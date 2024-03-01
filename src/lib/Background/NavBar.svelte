<script lang="js">
  import "../../app.css";
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
</script>

<nav class="w-full h-28 sm:h-30 bg-stone-600 bg-opacity-5 outline">
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
    <div class=" sm:flex items-center ml-6 "> 
      <button type="button" class="inline-flex justify-center rounded-md outline outline-offset-8 text-2xl text-stone-300 font-sans " >
        Contact
      </button>
    </div>

    <div class="flex sm:hidden">
      <div class="relative inline-flex text-right">
   
          <button type="button" class=" mr-8 inline-flex justify-center rounded-md focus:ring-2 focus:ring-stone-500" aria-expanded="{isDropdownOpen}" aria-haspopup="true" on:click={toggleDropdown}>
          <img src="src\lib\imgs\1200px-Hamburger_icon_white.svg.png" alt="menu" class="h-10 sm:h-15 ml-2"/>
          </button>
    
        {#if isDropdownOpen}
          <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" >
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Experience</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Projects</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Resume</a>
            </div>
          </div>
        {/if}

      </div>
    </div>
  </div>
</nav>
