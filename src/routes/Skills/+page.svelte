<script>
  /**
   * @type {[]}
   */
  import { languagesAry, backendAry, frontendAry, toolsAry } from "./icons.js";
  import stickers from "$lib/imgs/Stickers.png";
</script>

<div class="tablet:flex hidden">
  <!-- Desktop design -->

  <!-- Leftside -->
  <div class="tablet:flex hidden justify-center items-center h-screen w-1/2">
    <img
      src={stickers}
      class="w-5/6 rounded-2xl shadow-2xl drop-shadow-2xl"
    />
  </div>

  <!-- Right side design -->
  <div class="tablet:w-1/2">
    <h1
      class="font-sans text-white tablet:text-5xl text-center mt-1 py-1 border-t"
    >
      Languages
    </h1>
    <div class="flex justify-center items-center py-2 space-x-5">
      {#each languagesAry as img}
        <img src={img} class="w-8 h-8" />
      {/each}
    </div>
    <div class="text-center text-white font-sans border-b pb-1">
      Python, C, C#, C++, JavaScript, TypeScript, Go
    </div>
    <h1 class="font-sans text-white text-5xl text-center mt-5 py-1 border-t">
      Backend Technologies
    </h1>
    <div class="flex justify-center items-center py-2 space-x-5">
      {#each backendAry as img}
        <img src={img} class="w-8 h-8" />
      {/each}
    </div>
    <div class="text-center text-white font-sans border-b pb-1">
      ASP.NET, Flask, Django, Echo PostgeSQL, MongoDB, MySQL
    </div>
    <h1 class="font-sans text-white text-5xl text-center mt-5 py-1 border-t">
      Frontend Technologies
    </h1>
    <div class="flex justify-center items-center py-2 space-x-5">
      {#each frontendAry as img}
        <img src={img} class="w-8 h-8" />
      {/each}
    </div>
    <div class="text-center text-white font-sans border-b pb-1">
      React, Svelte, Tailwind, Flutter, Vue
    </div>
    <h1 class="font-sans text-white text-5xl text-center mt-5 py-1 border-t">
      Tools
    </h1>
    <div class="flex justify-center items-center py-2 space-x-5">
      {#each toolsAry as img}
        <img src={img} class="w-8 h-8" />
      {/each}
    </div>
    <div class="text-center text-white font-sans border-b mb-1">
      Github, WSL, Swagger, Azure, GCP
    </div>
  </div>
</div>
<!-- Mobile design -->
<div class="tablet:hidden">
  <h1 class="font-sans text-white text-6xl text-center mt-5 py-1">Languages</h1>
  <div class="flex justify-center items-center py-2 space-x-5">
    {#each languagesAry as img}
      <img src={img} class="w-9 h-9" />
    {/each}
  </div>
  <div class="text-center text-white font-sans text-lg border-b pb-1">
    Python, C, C#, C++, JavaScript, TypeScript, Go
  </div>
  <h1 class="font-sans text-white text-5xl text-center mt-5 py-1">
    Backend Technologies
  </h1>
  <div class="flex justify-center items-center py-2 space-x-5">
    {#each backendAry as img}
      <img src={img} class="w-9 h-9" />
    {/each}
  </div>
  <div class="text-center text-white font-sans text-lg border-b pb-1">
    ASP.NET, Flask, Django, Echo, MongoDB, PostgeSQL, MySQL
  </div>
  <h1 class="font-sans text-white text-5xl text-center mt-5 py-1">
    Frontend Technologies
  </h1>
  <div class="flex justify-center items-center py-2 space-x-5">
    {#each frontendAry as img}
      <img src={img} class="w-9 h-9" />
    {/each}
  </div>
  <div class="text-center text-white font-sans border-b pb-1 text-lg">
    React, Svelte, Tailwind, Flutter, Vue
  </div>
  <h1 class="font-sans text-white text-5xl text-center mt-5 py-1">Tools</h1>
  <div class="flex justify-center items-center py-2 space-x-5">
    {#each toolsAry as img}
      <img src={img} class="w-9 h-9" />
    {/each}
  </div>
  <div class="text-center text-white font-sans mb-1 text-lg">
    Github, WSL, Swagger, Azure, GCP
  </div>
</div>
