<script>
import useProjects from '@/stores/projectsData.js'
import SinglePageSection from '@/components/SinglePageSection.vue'

   export default {
      data() {
         return {
             useProjects : useProjects(),
         }
      },
      components : {
         SinglePageSection : SinglePageSection,
      },
      computed : {
         currentProject(){
            const projectId = Number(this.$route.params.id);
            const project = this.useProjects.myProjects.find(pro => pro.id === projectId);
            return project;
         }
      },
   };
</script>


<template>
   <div class="bg-[#0a192f]  md:px-10 lg:px-10 px-2 py-10 min-h-screen lg:ml-72 ml-0 overflow-hidden">
      <SinglePageSection :pro="currentProject"/>
   </div>
</template>