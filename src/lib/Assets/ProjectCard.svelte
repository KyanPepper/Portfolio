<script>
  // @ts-ignore
  export let TechImgs = [
    "src/lib/imgs/1200px-Python.svg.png",
    "src/lib/imgs/flasklogo.png",
    "src/lib/imgs/Postgresql_elephant.svg.png",
    "src/lib/imgs/1200px-Svelte_Logo.svg.png",
    "src/lib/imgs/tailwind.svg",
  ];

  export let Title = "Washington Construction Projects";
  export let About =
    "WCP is a webscraper map visualization tool tailored for tracking construction projects in Washington. It categorizes construction projects by county, presenting a streamlined list and visual representation on a map to inform users on various projects.";
  export let img1 = "src/lib/ProjectScreenShots/washconstruction1.png";
  export let img2 = "src/lib/ProjectScreenShots/washconstruction2.png";
  export let Frontend = "The Frontend is built on SvelteKit and styled with Tailwind CSS. I had used the Leaflet library for the map."
  export let Backend = "WCP utilizes a Python backend with Flask and PostgreSQL for the database. I deliberately chose Python for its web scraping capabilities where I employed the BeautifulSoup library to scrape the construction data. I had also used the OpenStreetMaps api for location data."
  export let GhUrl = "";
  export let YtUrl = "";
  export let DeployedUrl = "k";
</script>

<!-- Title + logos -->
<div
  class="flex flex-col justify-center w-full h-full bg-stone-600 bg-opacity-15 rounded-md outline"
>
  <div class="text-center font-sans text-white">
    <h1 class="text-2xl">{Title}</h1>
  </div>

  <div
    class="flex flex-col justify-center items-center w-full max-w-screen-lg mx-auto"
  >
    <div
      class="tablet:flex hidden h-max w-full justify-center bg-stone-600 bg-opacity-5 outline outline-white"
    >
      <div class="flex h-max items-center justify-center w-full">
        <div class="w-5/6 h-5/6 relative">

          <div class="mt-4 text-white font-sans">
            <h1 class="text-base">About</h1>
            <p class="text-xs">{About}</p>
          </div>
          <div class="mt-4 text-white font-sans">
            <h1 class="text-base">Backend</h1>
            <p class="text-xs">{Backend}</p>
          </div>
          <div class="mt-4 text-white font-sans">
            <h1 class="text-base">Frontend</h1>
            <p class="text-xs">{Frontend}</p>
          </div>
          
          <div class="mt-4 text-white font-sans text-xs ">
            <div class="flex"> 
              <a href="{GhUrl}" class="flex items-center pr-3 ">
                <img src="src/lib/imgs/githublogo.png" class="size-5" />
                <span class="ml-1">View on Github</span>
              </a>
              <a href="{YtUrl}" class="flex items-center"> 
                <img src="src/lib/imgs/Red-YouTube-logo.png" class="w-7 h-4" />
                <span class="">View on Youtube</span>
              </a>
              {#if DeployedUrl != ""}
              <a href="{YtUrl}" class="flex items-center pl-3"> 
                <img src="src\lib\imgs\weblogo.png" class="size-5" />
                <span class="ml-1">Try it Out</span>
              </a>
              {/if}
            </div>
          </div>
          
          

        </div>
      </div>
      <!-- Right side with Imgs -->
      <div class="flex items-center justify-center w-full h-max pr-5">
        <div class="flex flex-col">
          <div class="py-3">
            <img src={img1} class="w-full outline outline-black" />
          </div>
          <div class="pb-3">
            <img src={img2} class="w-full outline outline-black" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center py-1 space-x-5">
    {#each TechImgs as img}
      <img src={img} class="w-10 h-10" />
    {/each}
  </div>
</div>
