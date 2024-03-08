<script>
  // @ts-ignore
  export let TechImgs = [
    "src/lib/imgs/1200px-Python.svg.png",
    "src/lib/imgs/flask-icon-1594x2048-84mjydzf.png",
    "src/lib/imgs/postgrese.png",
    "src/lib/imgs/1200px-Svelte_Logo.svg.png",
    "src/lib/imgs/tailwindcss_logo_icon_170649.png",
  ];

  export let Title = "";
  export let About = "";
  export let img1 = "src/lib/ProjectScreenShots/washconstruction1.png";
  export let img2 = "src/lib/ProjectScreenShots/washconstruction2.png";
  export let Frontend = "";
  export let Backend = "";
  export let GhUrl = "";
  export let Yturl = "";
  export let DeployedUrl = "";

</script>
<!-- Title + logos -->
<div class="flex flex-col justify-center w-full h-full bg-stone-600 bg-opacity-5 outline">
  <div class="text-center  text-white">
    <h1 class="text-xl font-bold">Title Here</h1>
  </div>

  <div class="flex flex-col justify-center items-center w-full max-w-screen-lg mx-auto">
    <div class="tablet:flex hidden h-max w-full justify-center bg-stone-600 bg-opacity-5 outline outline-white">
      <div class="flex h-max items-center justify-center w-full">
        <div class="w-5/6 h-5/6 relative"></div>
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
  <div class="flex justify-center items-center pt-2 space-x-5">
    <img src="src/lib/imgs/1200px-Python.svg.png" class="w-12 h-12" />
    <img src="src/lib/imgs/flask.svg" class="w-12 h-12" />
    <img src=" src/lib/imgs/postgre-sql-logo-16-7-en.svg " class="w-12 h-12" />
    <img src="src/lib/imgs/1200px-Svelte_Logo.svg.png" class="w-12 h-12" />
    <img src="src/lib/imgs/tailwindcss_logo_icon_170649.png" class="w-12 h-12" />
  </div>
  
</div>

