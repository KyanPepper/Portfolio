<script>
    export let Title = "Triangle Fratnerity";
    export let About = "I established and led WSU’s first STEM fraternity, actively recruiting 34 members. Through this initiative, I cultivated a vibrant STEM community within WSU's Greek Life, providing a platform for STEM students like myself to network, collaborate, and develop both professionally and academically."
    export let Role = "Founder And President";
    export let Img = "src/lib/imgs/triangle.png";
    export let Timeline = "2023 - Present"; 
</script>


<div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
        <img src={Img}  class="h-full w-full object-cover"/>
    </div>
    <div class="bg-stone-600 bg-opacity-15 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-white font-bold text-xl mb-2">{Title} - {Role}</div>
    
        <p class="text-white text-base">{About}</p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-white">{Timeline}</p>
        </div>
      </div>
    </div>
  </div>