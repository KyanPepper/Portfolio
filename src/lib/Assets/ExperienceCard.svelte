<script>
  import { fly, slide } from "svelte/transition";

  export let Title = "";
  export let About = "";
  export let Role = "";
  export let Img = "";
  export let Timeline = "";
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

<div class="w-full tablet:max-w-full sm:flex z-10 relative outline">
  <div
    class="h-48 sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
  >
    <img src={Img} class="h-full w-full object-cover" />
  </div>
  <div
    class="  rounded-b p-4 flex flex-col justify-between"
  >
    <div class="mb-8">
      <div class="text-white  font-sans text-2xl mb-2">
        {Title} - {Role}
      </div>

      <button
      type="button"
      class="inline-flex justify-center rounded-md focus:ring-2 focus:ring-stone-500 tablet:hidden pb-1"
      on:click={toggleDropdown}
    >
      <div class="outline flex items-center text-white font font-sans p-1">
        {#if isDropdownOpen }
          Close
        {:else}
          More
        {/if}
        <img src="src\lib\imgs\dropdown.png" alt="menu" class="h-2 ml-1" />
      </div>
    </button>
    {#if isDropdownOpen}
      <p class="text-white font-sans text-base tablet:hidden" transition:slide>{About}</p>
    {/if}
    <p class="text-white font-sans text-base hidden tablet:flex" transition:slide>{About}</p>
    </div>
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-white font-sans">{Timeline}</p>
      </div>
    </div>
  </div>
</div>
