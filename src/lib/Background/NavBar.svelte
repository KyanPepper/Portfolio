<script lang="js">
  import "../../app.css";
  let dItems = [
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Resume", href: "/resume" },
    { title: "Contact", href: "/contact" },
  ];

</script>

<nav class="w-full h-16 sm:h-30 bg-stone-600 bg-opacity-5 outline">
  <div class="flex items-center justify-between h-full max-w-screen-lg mx-auto">
    <div class="text-stone-300 text-3xl font-sans flex items-center sm:pl-3  pl-2"> 
      Kyan   
      <img
        src="src\lib\imgs\orange-4235372_1280.png"
        alt="Orange"
        class="h-8 sm:h-15 ml-2"
      />
    </div>
    <div class="hidden sm:flex items-center space-x-4 justify-center"> 
      <a href="/" class="text-stone-300 text-2xl">Experience</a>
      <a href="/" class="text-stone-300 font-sans text-2xl">Projects</a>
      <a href="/" class="text-stone-300 font-sans text-2xl">Resume</a>
    </div>
    <div class="hidden sm:flex items-center pr-3"> 
      <a href="/" class="text-stone-300 font-sans sm:text-3xl ">Contact</a> 
    </div>

    <div class="flex sm:hidden">
    
    </div>
  
  </div>
</nav>
