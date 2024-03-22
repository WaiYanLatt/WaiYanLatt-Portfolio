<script>
import ProjectSection from '@/components/ProjectSection.vue';

   export default {
      data(){
        return {}
      },
      components : {
        ProjectSection : ProjectSection,
      }
   }
</script>

<template>
     <div class="bg-[#0a192f]  container mx-auto lg:px-10 px-5 py-10 min-h-screen lg:ml-72 ml-0 overflow-hidden">
        <ProjectSection/>
     </div>
</template>