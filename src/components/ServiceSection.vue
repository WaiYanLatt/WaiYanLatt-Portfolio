<script>
import useService from '@/stores/Service.js';
import ServiceCard from '@/components/ServiceCard.vue';


export default {
  data() {
    return {
      useService : useService(),
    };
  },
  components : {
    ServiceCard : ServiceCard,
  }
};
</script>

<template>
  <div class="animate__animated animate__fadeInRight">
    <div class="mt-10 lg:mt-0">
      <h1 class="text-secondary text-3xl font-semibold">Services</h1>
      <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
      <div class="w-11 mt-1 h-1 bg-[#64ffda]"></div>
       <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
          <ServiceCard v-for="ser in useService.service" :ser="ser" :key="ser.id"/>
       </div>
    </div>
  </div>
</template>
