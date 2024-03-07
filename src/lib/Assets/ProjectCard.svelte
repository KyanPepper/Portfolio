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
</script>

<div class="tablet:flex hidden h-screen">
  <!-- Left side with PDF viewer -->
  <div class="flex items-center justify-center w-1/2">
    <div class="w-5/6 h-5/6 relative "></div>
  </div>

  <!-- Right side with Imgs -->
  <div class="flex items-center justify-center w-1/2">
    <img src={img1} />
  </div>
</div>
