<script>



  // @ts-ignore
  import Lines from "$lib/Background/Lines.svelte";
import NavBar from "$lib/Background/NavBar.svelte";
import "../app.css";

</script>
<div>
    <NavBar>
      
    </NavBar>
    <Lines>
      
    </Lines>
</div>


<slot/> 
<style global lang="postcss">
    :global(body) {
      background-color: #171414;
    }
  </style>