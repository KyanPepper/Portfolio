<script>
  import NavBar from "$lib/Background/NavBar.svelte";
  import "../app.css";
</script>

<div class="z-50 max-w-screen mx-auto max-h-screen my-auto ">
  <NavBar></NavBar>
  
</div>
<div class="z-30">
  <slot />
</div>



<style global lang="postcss">
  :global(body) {
    background-color: #171414;
  }
</style>
