<script>
  export let Title = "";
  export let About = "";
  export let Role = "";
  export let Img = "";
  export let Timeline = "";
</script>

<div class="w-full tablet:max-w-full sm:flex z-10 relative">
  <div
    class="h-48 sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
  >
    <img src={Img} class="h-full w-full object-cover" />
  </div>
  <div
    class="bg-stone-600 bg-opacity-15 border border-white rounded-b p-4 flex flex-col justify-between"
  >
    <div class="mb-8">
      <div class="text-white font-bold font-sans text-xl mb-2">
        {Title} - {Role}
      </div>

      <p class="text-white font-sans text-base">{About}</p>
    </div>
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-white font-sans">{Timeline}</p>
      </div>
    </div>
  </div>
</div>
