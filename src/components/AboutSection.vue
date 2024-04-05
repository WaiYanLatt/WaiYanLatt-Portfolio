<script>
import useMe from "@/stores/Me.js";
export default {
  data() {
    return {
      useMe: useMe(),
    };
  },
};
</script>

<template>
  <div class="animate__animated animate__fadeInRight">
    <div class="mt-10 lg:mt-0">
      <h1 class="text-secondary leading-10 text-3xl font-semibold">About Me</h1>
      <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
      <div class="w-11 mt-1 h-1 bg-[#64ffda]"></div>
      <p class="font-semibold mt-5 text-color text-sm leading-10">
        My name is Wai Yan Latt . I have one year of job experience. I have
        gained extensive experience in frontend technologies including HTML5,
        CSS3, JavaScript, and various frameworks such as React.js and Vue.js. I
        am proficient in responsive design principles and strive to ensure that
        every website or application I work on is both visually appealing and
        fully functional across all devices.In my previous roles, I have
        successfully collaborated with cross-functional teams including
        designers, backend developers, and project managers to deliver
        high-quality solutions that meet client requirements and business
        objectives. My attention to detail, problem-solving skills, and ability
        to stay updated with the latest industry trends have enabled me to
        consistently produce exceptional results.Moreover, I am well-versed in
        version control systems like Git and have experience with Agile
        methodologies, allowing me to adapt quickly to evolving project needs
        and deliver projects on time and within budget.
      </p>
      <h1 class="text-secondary leading-10 text-3xl mt-5 font-semibold">
        My Skills
      </h1>
      <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
      <div class="w-11 mt-1 h-1 bg-[#64ffda]"></div>
      <h1
        class="font-semibold flex items-center text-white leading-7 text-sm my-3 mt-10"
      >
        <i class="fa-solid fa-circle text-[#64ffda] mr-3"></i>
        Developing responsive and user-friendly interfaces for web applications
        using modern frontend technologies.
      </h1>
      <h1
        class="font-semibold flex items-center text-white leading-7 text-sm my-3"
      >
        <i class="fa-solid fa-circle text-[#64ffda] mr-3"></i>
        Optimizing website performance and ensuring compatibility across
        different browsers and devices.
      </h1>
      <h1
        class="font-semibold flex items-center text-white leading-7 text-sm my-3"
      >
        <i class="fa-solid fa-circle text-[#64ffda] mr-3"></i>
        Collaborating with designers to translate mockups and wireframes into
        functional code.
      </h1>
    </div>
    <h1 class="text-secondary leading-10 text-3xl mt-5 font-semibold">
      My Technologies
    </h1>
    <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
    <div class="w-11 mt-1 h-1 bg-[#64ffda]"></div>
    <div class="w-[300px] mt-5 lg:mt-10">
      <div class="*:mt-2">
        <h1
          class="font-semibold flex items-center text-white leading-7 text-sm"
        >
          <i class="fa-solid fa-mug-saucer text-[#64ffda]"></i>
          <span class="text-[#64ffda] mx-3">Html : </span>
          {{ useMe.mySkill.html }}
        </h1>
        <!-- <hr class="border border-[#64ffda]" /> -->
        <h1
          class="font-semibold flex items-center text-white leading-7 text-sm"
        >
          <i class="fa-solid fa-mug-saucer text-[#64ffda]"></i>
          <span class="text-[#64ffda] mx-3">Css : </span>{{ useMe.mySkill.css }}
        </h1>
        <!-- <hr class="border border-[#64ffda]" /> -->
        <h1
          class="font-semibold flex items-center text-white leading-7 text-sm"
        >
          <i class="fa-solid fa-mug-saucer text-[#64ffda]"></i>
          <span class="text-[#64ffda] mx-3">Vue : </span>{{ useMe.mySkill.vue }}
        </h1>
        <!-- <hr class="border border-[#64ffda]" /> -->
        <h1
          class="font-semibold flex items-center text-white leading-7 text-sm"
        >
          <i class="fa-solid fa-mug-saucer text-[#64ffda]"></i>
          <span class="text-[#64ffda] mx-3">JavaScript : </span
          >{{ useMe.mySkill.js }}
        </h1>
        <!-- <hr class="border border-[#64ffda]" /> -->
        <h1
          class="font-semibold flex items-center text-white leading-7 text-sm"
        >
          <i class="fa-solid fa-mug-saucer text-[#64ffda]"></i>
          <span class="text-[#64ffda] mx-3">Tailwind : </span
          >{{ useMe.mySkill.tailwind }}
        </h1>
        <!-- <hr class="border border-[#64ffda]" /> -->
        <h1
          class="font-semibold flex items-center text-white leading-7 text-sm"
        >
          <i class="fa-solid fa-mug-saucer text-[#64ffda]"></i>
          <span class="text-[#64ffda] mx-3">Bootstrap : </span
          >{{ useMe.mySkill.boot }}
        </h1>
        <!-- <hr class="border border-[#64ffda]" /> -->
        <h1
          class="font-semibold flex items-center text-white leading-7 text-sm"
        >
          <i class="fa-solid fa-mug-saucer text-[#64ffda]"></i>
          <span class="text-[#64ffda] mx-3">React : </span
          >{{ useMe.mySkill.react }}
        </h1>
        <!-- <hr class="border border-[#64ffda]" /> -->
      </div>
    </div>
    <h1 class="text-secondary leading-10 text-3xl mt-5 font-semibold">
      My Info
    </h1>
    <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
    <div class="w-11 mt-1 h-1 bg-[#64ffda]"></div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
      <div class="w-[300px]">
        <div class="*:mt-2">
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Name : </span
            >{{ useMe.myInfo.name }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Age : </span
            >{{ useMe.myInfo.age }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Education : </span
            >{{ useMe.myInfo.eduction }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Major : </span
            >{{ useMe.myInfo.major }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">University : </span
            >{{ useMe.myInfo.university }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Date of Birth : </span
            >{{ useMe.myInfo.birth }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
        </div>
      </div>
      <div class="w-[300px] mt-5 lg:mt-0 md:mt-0">
        <div class="*:mt-2">
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Gender : </span
            >{{ useMe.myInfo.gender }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">City : </span
            >{{ useMe.myInfo.city }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Country : </span
            >{{ useMe.myInfo.country }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Email : </span
            >{{ useMe.myInfo.email }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Phone : </span
            >{{ useMe.myInfo.phone }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1
            class="font-semibold flex items-center text-white leading-7 text-sm"
          >
            <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Marital Status : </span
            >{{ useMe.myInfo.Marial }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
