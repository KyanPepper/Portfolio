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

<div class="tablet:flex hidden h-max">
  <!-- Left side with PDF viewer -->
  <div class="flex h-max items-center justify-center w-1/2">
    <div class="w-5/6 h-5/6 relative"></div>
  </div>

  <!-- Right side with Imgs -->

  <div class="flex items-center justify-center w-1/2 h-max">
    <div class="flex flex-col">
      <div class="py-3">
        <img src={img1} class=" w-3/5 outline outline-white" />
      </div>
      <div class="pb-3"><img src={img2} class="w-3/5 outline outline-white" /></div>
    </div>
  </div>
</div>
