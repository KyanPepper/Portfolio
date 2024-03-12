<script>
    export let Title = "Triangle Fratnerity";
    export let About = "I established and led WSU’s first STEM fraternity, actively recruiting 34 members. Through this initiative, I cultivated a vibrant STEM community within WSU's Greek Life, providing a platform for STEM students like myself to network, collaborate, and develop both professionally and academically."
    export let Role = "Founder And President";
    export let Img = "src/lib/imgs/triangle.png";
    export let Timeline = "2023 - Present"; 
</script>


<div class="w-full tablet:max-w-full sm:flex z-10 relative">
    <div class="h-48 sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden" >
        <img src={Img}  class="h-full w-full object-cover"/>
    </div>
    <div class="bg-stone-600  bg-opacity-15 border border-white rounded-b p-4 flex flex-col justify-between">
      <div class="mb-8">
        <div class="text-white font-bold font-sans text-xl mb-2">{Title} - {Role}</div>
    
        <p class="text-white font-sans text-base">{About}</p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-white font-sans">{Timeline}</p>
        </div>
      </div>
    </div>
  </div>