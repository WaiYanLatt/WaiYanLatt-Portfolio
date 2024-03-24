<script>
import ServiceSection from '@/components/ServiceSection.vue';

   export default {
      data(){
        return {}
      },
      components : {
        ServiceSection : ServiceSection,
      }
   }
</script>

<template>
     <div class="bg-[#0a192f]  container mx-auto lg:px-10 md:px-10 px-2 py-10 min-h-screen lg:ml-72 ml-0 overflow-hidden">
        <ServiceSection/>
     </div>
</template>