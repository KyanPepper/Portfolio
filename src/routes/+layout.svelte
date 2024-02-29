<script>
import NavBar from "$lib/NavBar.svelte";
import "../app.css";

</script>
<div>
    <NavBar>
    </NavBar>
</div>


<slot/> 
<style global lang="postcss">
    :global(body) {
      background-color: #171414;
    }
  </style>