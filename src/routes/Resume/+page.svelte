<script>
  const resume = new URL('/src/lib/Assets/Kotschevar-Smead_Resume.pdf', import.meta.url).href
</script>
<!-- Desktop design -->
<div class="flex h-screen">

    <!-- Left side with PDF viewer -->
    <div class="flex items-center justify-center w-1/2">
      <div class="w-3/4 h-3/4 border border-gray-300 relative overflow-hidden">
        <embed class="absolute inset-0 w-full h-full" src={resume} type="application/pdf" />
      </div>
    </div>
  
    <!-- Right side with Download -->
    <div class="flex items-center justify-center w-1/2">
      <div>
        <p class="text-center">Download</p>
      </div>
    </div>
  </div>

  