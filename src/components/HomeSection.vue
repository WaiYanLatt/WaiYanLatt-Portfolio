<template>
  <div
    class="flex lg:flex-row flex-col items-center justify-between animate__animated animate__fadeInRight"
  >
    <div class="lg:w-[710px] w-full lg:mt-0 mt-10">
      <h1 class="text-secondary font-semibold text-4xl">
        Hello,my name is <span class="text-[#64ffda]">Wai Yan Latt</span>
      </h1>
      <h1 class="text-secondary font-semibold text-3xl mt-5">
        I'm a <span class="text-[#64ffda]">front-end developer.</span>
      </h1>
      <p class="text-color font-semibold text-md mt-5 leading-10">
        I am a <span class="text-[#64ffda]">front-end developer</span> with 3 years of experience. I can develope
        <span class="text-[#64ffda]">UI/UX designs</span> provided by <span class="text-[#64ffda]">designers</span> , and I can also <span class="text-[#64ffda]">collaborate</span> with
        back-end developers who provide <span class="text-[#64ffda]">APIs</span>.
      </p>
      <button
        class="hover:bg-[#64ffda] border-[#64ffda] hover:border-white duration-500 hover:text-black mt-5 px-5 py-2 rounded-md font-semibold text-lg text-[#64ffda] border"
      >
        Download CV
      </button>
    </div>
    <div class="relative lg:mt-0 mt-10">
      <div
        class="p-10 border-t-[6px] border-s-[6px] border-[#64ffda] absolute top-0"
      ></div>
      <img
        src="/me.jpg"
        alt=""
        class="w-96 h-[500px] object-cover p-10 hover:scale-105 duration-500 cursor-pointer"
      />
      <div
        class="p-10 border-r-[6px] border-b-[6px] border-[#64ffda] absolute bottom-0 right-0 overflow-visible"
      ></div>
    </div>
  </div>
</template>
