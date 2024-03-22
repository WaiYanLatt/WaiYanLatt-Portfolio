<script>
export default {
  props: {
    pro: {
      type: Object,
      require: true,
    },
  },
};
</script>

<template>
  <div class="w-full bg-transparent duration-500 rounded-lg overflow-hidden p-3 border border-slate-600">
    <img :src="pro.projectUrl" class="h-8 w-auto my-3 rounded-lg" alt="" />
    <h1 class="font-semibold text-md leading-10 text-secondary">
      Project Name : <span class="text-[#64ffda]">{{ pro.projectName }}</span>
    </h1>
    <p class="font-semibold text-md text-secondary leading-10">
      Programming Language :
      <span class="text-[#64ffda]">{{ pro.language }}</span>
    </p>
    <p class="font-semibold text-md text-secondary leading-10">
      Framework : <span class="text-[#64ffda]">{{ pro.framework }}</span>
    </p>
    <p class="font-semibold text-md text-secondary leading-10">
      DataStore : <span class="text-[#64ffda]">{{ pro.dataStore }}</span>
    </p>
    <p class="font-semibold text-md text-secondary leading-10">
      API : <span class="text-[#64ffda]">{{ pro.Api }}</span>
    </p>
    <div class="mt-5">
      <a :href="pro.demoLink" class="font-semibold underline text-blue-500" target="_blank"
        ><i class="fa-solid fa-link mr-3"></i>DEMOLINK</a
      >
      <router-link :to="`/project/${pro.id}`">
        <span class="font-semibold underline text-blue-500 ml-5"
        ><i class="fa-solid fa-bars-progress mr-3"></i>VIEW DETAILS</span
      >
      </router-link>
    </div>
  </div>
</template>
