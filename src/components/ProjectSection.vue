<script>
import useProjects from "@/stores/projectsData.js";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  data() {
    return {
      useProjects: useProjects(),
    };
  },
  components: {
    ProjectCard: ProjectCard,
  },
};
</script>

<template>
  <div class="animate__animated animate__fadeInRight">
    <div class="mt-10 lg:mt-0">
      <h1 class="text-secondary text-3xl font-semibold">Projects</h1>
      <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
      <div class="w-11 mt-1 h-1 bg-[#64ffda]"></div>
      <button
        @click="useProjects.setFilterStatus('all')"
        class="hover:underline hover:text-[#64ffda] letter hover:underline-offset-4 text-white mr-5 duration-500 mt-5 text-sm font-semibold"
        :class="{
          'underline underline-offset-4 !text-[#64ffda]':
            useProjects.filterStatus === 'all',
        }"
      >
        ALL
      </button>
      <button
        @click="useProjects.setFilterStatus('tailwind')"
        class="hover:underline letter hover:text-[#64ffda] hover:underline-offset-4 text-white mr-5 duration-500 mt-5 text-sm font-semibold"
        :class="{
          'underline underline-offset-4 !text-[#64ffda]':
            useProjects.filterStatus === 'tailwind',
        }"
      >
        TAILWIND
      </button>
      <button
        @click="useProjects.setFilterStatus('bootstrap')"
        class="hover:underline letter hover:text-[#64ffda] hover:underline-offset-4 text-white mr-5 duration-500 mt-5 text-sm font-semibold"
        :class="{
          'underline underline-offset-4 !text-[#64ffda]':
            useProjects.filterStatus === 'bootstrap',
        }"
      >
        BOOTSTRAP
      </button>
      <button
        @click="useProjects.setFilterStatus('vue')"
        class="hover:underline letter hover:text-[#64ffda] hover:underline-offset-4 text-white mr-5 duration-500 mt-5 text-sm font-semibold"
        :class="{
          'underline underline-offset-4 !text-[#64ffda]':
            useProjects.filterStatus === 'vue',
        }"
      >
        VUE
      </button>
      <button
        @click="useProjects.setFilterStatus('vue , tailwind')"
        class="hover:underline letter hover:text-[#64ffda] hover:underline-offset-4 text-white mr-5 duration-500 mt-5 text-sm font-semibold"
        :class="{
          'underline underline-offset-4 !text-[#64ffda]':
            useProjects.filterStatus === 'vue , tailwind',
        }"
      >
        VUE AND TAILWIND
      </button>
      <button
        @click="useProjects.setFilterStatus('api')"
        class="hover:underline letter hover:text-[#64ffda] hover:underline-offset-4 text-white mr-5 duration-500 mt-5 text-sm font-semibold"
        :class="{
          'underline underline-offset-4 !text-[#64ffda] ':
            useProjects.filterStatus === 'api',
        }"
      >
        INCLUDES APIs
      </button>
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-10">
        <ProjectCard
          v-for="pro in useProjects.filterProjects"
          :pro="pro"
          :key="pro.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .letter{
     letter-spacing: 3px;
  }
</style>
