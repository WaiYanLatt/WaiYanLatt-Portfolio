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
  <div>
    <div class="fixed z-10 top-0 pt-10 bg-[#0a192f]">
      <div
        class="w-[980px] bg-slate-950 px-5 py-3 rounded-md flex items-center"
      >
        <router-link to="/project">
          <button class="h-10 w-10 bg-[#64ffda] mr-5 rounded-full border-2">
            <i class="fa-solid fa-angle-left"></i>
          </button>
        </router-link>
        <h1 class="text-[#64ffda] font-semibold">
          {{ pro.projectName }} Details Page
        </h1>
      </div>
    </div>
    <div class="flex relative">
      <div
        class="bg-slate-950 w-[350px] h-[450px] rounded-lg p-3 fixed top-[130px]"
      >
        <img :src="pro.imageUrl" alt="" class="w-full rounded-lg h-[250px]" />
        <div class="mt-10">
          <a :href="pro.demoLink" target="_blank">
            <button
              class="border px-5 py-3 w-full text-sm rounded-lg text-[#64ffda] hover:bg-[#64ffda] hover:text-black duration-500 font-semibold"
            >
              <i class="fa-solid fa-link"></i>
              DEMOLINK
            </button>
          </a>
          <a :href="pro.sorceCodeLink" target="_blank">
            <button
              class="border px-5 py-3 w-full text-sm mt-3 rounded-lg text-[#64ffda] hover:bg-[#64ffda] hover:text-black duration-500 font-semibold"
            >
              <i class="fa-brands fa-github"></i>
              SOURCE CODE
            </button>
          </a>
        </div>
      </div>
      <div
        class="bg-slate-950 w-full min-h-[300px] rounded-lg mt-[90px] p-3 ml-[354px]"
      >
        <img :src="pro.projectUrl" class="h-8 w-auto my-3 rounded-lg" alt="" />
        <h1 class="font-semibold text-secondary text-lg mt-10">
          {{ pro.projectName }} Description
        </h1>
        <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
        <div class="w-11 mt-1 h-1 bg-[#64ffda]"></div>
        <p class="font-semibold leading-10 mt-5 text-color text-sm">
          {{ pro.desEng }}
        </p>
        <div class="mt-10">
          <h1 class="font-semibold text-secondary text-lg">
            Language & Framework
          </h1>
          <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
          <div class="w-11 mt-1 h-1 bg-[#64ffda] mb-5"></div>
          <p class="font-semibold flex items-center text-color leading-10 text-sm">
            <i class="fa-regular fa-circle-check mr-3 text-[#64ffda]"></i>
            Language <span class="text-[#64ffda] ml-3">: {{ pro.language }}</span
            >
          </p>
          <p class="font-semibold flex items-center text-color leading-10 text-sm">
            <i class="fa-regular fa-circle-check mr-3 text-[#64ffda]"></i>
            Framework <span class="text-[#64ffda] ml-1">: {{ pro.framework }}</span>
          </p>
          <p class="font-semibold flex items-center text-color leading-10 text-sm">
            <i class="fa-regular fa-circle-check mr-3 text-[#64ffda]"></i>
            DataStore <span class="text-[#64ffda] ml-3">: {{ pro.dataStore }}</span>
          </p>
          <p class="font-semibold flex items-center text-color leading-10 text-sm">
            <i class="fa-regular fa-circle-check mr-3 text-[#64ffda]"></i>
            API <span class="text-[#64ffda] ml-2"> : {{ pro.Api }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
