<script>
  const githubLogo = new URL('src/lib/imgs/githublogo.png', import.meta.url).href;
  const gmailIcon = new URL('src/lib/imgs/Gmail_icon_(2020).svg.webp', import.meta.url).href;
  const linkedinLogo = new URL('src/lib/imgs/linkedin.png', import.meta.url).href;
  const youtubeLogo = new URL('src/lib/imgs/Red-YouTube-logo.png', import.meta.url).href;
  const kyansnowImage = new URL('src/lib/imgs/kyansnow.jpg', import.meta.url).href;
</script>

<div class="tablet:flex">
  <!-- Desktop design -->
  <div class="hidden tablet:flex justify-center items-center h-screen w-1/2">
    <div class="text-center">
      <h1 class="text-4xl text-white">
        Hi, I'm Kyan Kotschevar-Smead, a Software Developer and a Computer
        Science student at Washington State University
      </h1>
      <div class="pt-5">
        <a href="/Projects">
          <button
            class="bg-orange-500 hover:bg-orange-400 text-white font-sans font-bold py-2 px-4 rounded"
          >
            Let's Get Started
          </button>
        </a>

        <div class="mt-4 text-white font-sans text-xs">
          <div class="flex justify-center">
            <div class="flex">
              <a href="https://github.com/KyanPepper" class="flex items-center">
                <img src={githubLogo} class="size-5" />
                <span class="pl-1 pr-5">KyanPepper</span>
              </a>
              <a href="mailto:kyankks1@gmail.com" class="flex items-center">
                <img src={gmailIcon} class="size-4" />
                <span class="pl-1 pr-5">Kyankks1</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kyan-kotschevar-smead-560862204/"
                class="flex items-center"
              >
                <img src={linkedinLogo} class="size-5" />
                <span class="pl-1 pr-4">Kyan Kotschevar-Smead</span>
              </a>
              <a href="https://www.youtube.com/@kyanks" class="flex items-center">
                <img src={youtubeLogo} class="w-7 h-4" />
                <span class="">Kyanks</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hidden w-1/2 tablet:flex justify-center items-center h-screen">
    <div class="w-4/5 h-4/5">
      <img
        src={kyansnowImage}
        alt="kyansnow"
        class="h-auto w-auto outline outline-white"
      />
    </div>
  </div>
  <!-- Mobile design below -->

  <div class="tablet:hidden w-11/12 pt-10 ml-auto mr-auto z-30">
    <div class="justify-center">
      <img
        src={kyansnowImage}
        alt="kyansnow"
        class="h-auto w-auto outline outline-white"
      />
    </div>
  </div>

  <div class="tablet:hidden w-full justify-center">
    <div class="text-center pt-10">
      <h1 class="text-2xl font-sans text-white">
        Hi, I'm Kyan Kotschevar-Smead, a Software Developer and a Computer
        Science student at Washington State University
      </h1>
    </div>
  </div>

  <div
    class="tablet:hidden ml-auto mr-auto justify-center pt-5 pb-10 flex flex-col items-center"
  >
    <a href="/Projects">
      <button
        class="bg-orange-500 hover:bg-orange-400 text-white font-sans font-bold py-2 px-4 rounded"
      >
        Let's Get Started
      </button>
    </a>
    <div
      class="mt-4 text-white font-sans text-xs flex flex-wrap justify-center"
    >
      <div class="flex items-center mr-4 mb-2">
        <a href="https://github.com/KyanPepper" class="flex items-center">
          <img src={githubLogo} class="size-5" />
          <span class="pl-1">KyanPepper</span>
        </a>
      </div>
      <div class="flex items-center mr-4 mb-2">
        <a href="mailto:kyankks1@gmail.com" class="flex items-center">
          <img src={gmailIcon} class="size-4" />
          <span class="pl-1">Kyankks1</span>
        </a>
      </div>
      <div class="flex items-center mr-4 mb-2">
        <a
          href="https://www.linkedin.com/in/kyan-kotschevar-smead-560862204/"
          class="flex items-center"
        >
          <img src={linkedinLogo} class="size-5" />
          <span class="pl-1">Kyan Kotschevar-Smead</span>
        </a>
      </div>
      <div class="flex items-center mr-4 mb-2">
        <a href="https://www.youtube.com/@kyanks" class="flex items-center">
          <img src={youtubeLogo} class="w-7 h-4" />
          <span class="">Kyanks</span>
        </a>
      </div>
    </div>
  </div>
</div>
