<script>



  // @ts-ignore
  import Lines from "$lib/Background/Lines.svelte";
import NavBar from "$lib/Background/NavBar.svelte";
import "../app.css";

</script>
<div class="max-w-screen mx-auto max-h-screen my-auto">
    <NavBar>
      
    </NavBar>
  
</div>


<slot/> 
<style global lang="postcss">
    :global(body) {
      background-color: #171414;
    }
  </style>