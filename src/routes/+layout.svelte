<script>
// @ts-nocheck

  import NavBar from "$lib/Background/NavBar.svelte";
  import "../app.css";
  let isDropdownOpen = false;

function toggleDropdown() {
  isDropdownOpen = !isDropdownOpen;
}
</script>

<div class=" max-w-screen mx-auto max-h-screen my-auto ">
  <NavBar isDropdownOpen={isDropdownOpen} {toggleDropdown}></NavBar>
  
</div>
<div class="z-30">
  <slot />
</div>



<style global lang="postcss">
  :global(body) {
    background-color: #171414;
  }
</style>
