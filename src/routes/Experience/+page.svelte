<script>
   import ExperienceCard from "$lib/Assets/ExperienceCard.svelte";
   import { ExperienceData } from "./ExperienceData";
</script>
<div class="relative">
    {#each ExperienceData as card}
        <ExperienceCard {...card} />
    {/each}      
</div>