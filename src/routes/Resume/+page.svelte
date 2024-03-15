<script>
  const Resume = new URL(
    "$lib/Assets/Kotschevar-Smead_Resume.pdf",
    import.meta.url
  ).href;
  const ResumeImg = "$lib/Assets/KyanResumeimg.jpg";
  function downloadResume() {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Kotschevar-Smead_Resume.pdf";
    link.click();
  }
</script>

<!-- Desktop design -->
<div class="tablet:flex hidden h-screen">
  <!-- Left side with PDF viewer -->
  <div class="flex items-center justify-center w-1/2">
    <div class="w-5/6 h-5/6 relative overflow-scroll">
      <img
        src={ResumeImg}
        title="Resume"
        alt="Resume"
        class=" outline-double outline-gray-400"
      />
    </div>
  </div>

  <!-- Right side with Download -->
  <div class="flex items-center justify-center w-1/2">
    <div class="text-center">
      <h1 class="text-center text-7xl font-sans text-white">Paper Resume</h1>
      <div class="pt-5">
        <button
          class="bg-orange-500 hover:bg-orange-400 text-white font-sans font-bold py-2 px-4 rounded"
          on:click={downloadResume}
        >
          Download
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Mobile design below -->
<div class="tablet:hidden">
  <!-- PDF Viewer -->
  <div class="pt-10 justify-center">
    <h1 class="text-3xl font-sans text-white text-center">Paper Resume</h1>
    <div class="  overflow-scroll pt-5 z-30">
      <img

        alt="Resume"
        src={ResumeImg}
        title="Resume"
        class=" outline-double outline-gray-400 w-5/6 h-full mx-auto z-30"
      />
    </div>
  </div>
  <!-- Download Button -->
  <div class="pt-5 pb-5 text-center">
    <button
      class="bg-orange-500 hover:bg-orange-400 text-white size-3/6 font-sans font-bold py-2 px-4 rounded"
      on:click={downloadResume}
    >
      Download
    </button>
  </div>
</div>
