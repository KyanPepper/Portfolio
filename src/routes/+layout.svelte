<script>
  // @ts-nocheck

  import NavBar from "$lib/Assets/NavBar.svelte";
  import "../app.css";
  let isDropdownOpen = false;
</script>

<div class=" max-w-screen mx-auto max-h-screen my-auto">
  <NavBar {isDropdownOpen}></NavBar>

  <slot />
</div>

<style global lang="postcss">
  :global(body) {
    background-color: #171414;
  }
</style>
