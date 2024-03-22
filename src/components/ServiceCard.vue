<script>
   export default {
      props : {
         ser : {
            type : Object,
            require : true,
         }
      }
   }
</script>


<template>
    <div class="bg-transparent border min-h-72 border-slate-600 w-full h-auto rounded-md overflow-hidden p-3 hover:scale-110 duration-500 cursor-pointer">
        <div class=" bg-[#64ffda] w-10 h-10 mx-auto rounded-full flex items-center justify-center">
           <i :class="ser.icon" class="text-black"></i>
        </div>
        <h1 class="mt-5 font-semibold text-center text-[#64ffda]">{{ ser.serviceType }}</h1>
        <h1 class="mt-5 font-semibold text-center text-secondary">{{ ser.Des }}</h1>
    </div>
</template>