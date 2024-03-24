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
      <h1 class="text-secondary font-semibold text-2xl mt-5">
        <span class="text-[#64ffda]">Front-end developement</span> and I.
      </h1>
      <p class="font-semibold mt-5 text-color text-md">
        My name is <span class="text-[#64ffda]">Wai Yan Latt</span> . I have
        studied <span class="text-[#64ffda]">front-end development</span> for
        about 2 years, and I have one year of job experience.
      </p>
      <h1 class="text-secondary font-semibold text-2xl mt-5">
        Why I left <span class="text-[#64ffda]">the job ?</span>
      </h1>
      <p class="font-semibold mt-5 text-color text-md leading-10">
        First, I will explain how I
        <span class="text-[#64ffda]">gained</span> one year of
        <span class="text-[#64ffda]">experience</span> from my previous job and
        why I <span class="text-[#64ffda]">eventually left it</span> . During
        the <span class="text-[#64ffda]">last year</span> , I worked at a
        company which I prefer not to name because
        <span class="text-[#64ffda]">it wouldn't reflect well on them</span>. In
        this position, I worked as a
        <span class="text-[#64ffda]"
          >front-end developer and was paid 3 lakh per month</span
        >. My tasks mainly
        <span class="text-[#64ffda]">involved developing UI using React</span> ,
        and during my time there, I developed
        <span class="text-[#64ffda]"> three web applications</span> . If you ask
        during an interview, I can provide the names of these
        <span class="text-[#64ffda]">three projects</span> . While the
        <span class="text-[#64ffda]">front-end development</span> aspect of
        these projects went smoothly, backend development was also
        <span class="text-[#64ffda]">necessary</span>. However, as the only
        developer in the company, I lacked expertise in
        <span class="text-[#64ffda]">backend development</span> . Consequently,
        the CEO hired a backend developer for
        <span class="text-[#64ffda]">two of the three projects</span> , leaving
        one for him because he can't afford money for this . After some time,
        <span class="text-[#64ffda]">the CEO requested</span> that I connect the
        frontend with the backend using
        <span class="text-[#64ffda]">WordPress</span> for the remaining project.
        Initially hesitant, I eventually agreed to take on the task. Despite my
        efforts to learn and adapt by watching tutorials on
        <span class="text-[#64ffda]">YouTube</span> , the website didn't turn
        out as expected.
        <span class="text-[#64ffda]">The CEO's constant blaming </span> and
        dissatisfaction added to my frustration. It was perplexing to be
        criticized daily by someone
        <span class="text-[#64ffda]">
          who lacked knowledge in HTML and CSS</span
        >
        . Internally, I often reacted with
        <span class="text-[#64ffda]">disbelief</span> . After enduring this
        situation for two months, I reached a breaking point and decided
        <span class="text-[#64ffda]"> to leave my job</span> .
      </p>
      <h1 class="text-secondary font-semibold text-2xl mt-5">
        <span class="text-[#64ffda]"
          >All web-development courses in Myanmar
        </span>
        and I .
      </h1>
      <p class="font-semibold mt-5 text-color text-md leading-10">
        At first, I want to say many courses is
        <span class="text-[#64ffda]">fake(ဂျင်း)</span>.Page Ad always
        say <span class="text-[#64ffda]">they can teach front-end and back-end in 3 months 😂</span>. I attended 3
        courses.
      </p>
      <ul class="*:font-semibold mt-3">
        <li class="text-color">1. ----</li>
        <li class="text-color">2. ----</li>
        <li class="text-color">3. Perfect 404</li>
      </ul>
      <p class="font-semibold mt-3 text-color text-md leading-10">
        No. 1, the course is absolutely <span class="text-[#64ffda]">fake(ဂျင်း)</span> in Hledan. What do you
        think the name of the course 😂?<br />
        No. 2, the course is <span class="text-[#64ffda]">half fake(ဂျင်း)</span> and half real. It is taught
        online.
        <br />
        No. 3,  <span class="text-[#64ffda]">Perfect 404</span> is the best for me 😁. That course is really good. If
        you don't believe me, you can attend.
      </p>

      <i class="font-semibold my-5 block text-secondary text-md"
        >* Note : sorry for my english and thanks for reading. *</i
      >
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
      <div class="w-[300px]">
        <div class="*:mt-2">
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Name : </span
            >{{ useMe.myInfo.name }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Age : </span
            >{{ useMe.myInfo.age }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Education : </span
            >{{ useMe.myInfo.eduction }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Major : </span
            >{{ useMe.myInfo.major }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">University : </span
            >{{ useMe.myInfo.university }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Date of Birth : </span
            >{{ useMe.myInfo.birth }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
        </div>
      </div>
      <div class="w-[300px] mt-5 lg:mt-0 md:mt-0">
        <div class="*:mt-2">
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Gender : </span
            >{{ useMe.myInfo.gender }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">City : </span
            >{{ useMe.myInfo.city }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Country : </span
            >{{ useMe.myInfo.country }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Email : </span
            >{{ useMe.myInfo.email }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Phone : </span
            >{{ useMe.myInfo.phone }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Marital Status : </span
            >{{ useMe.myInfo.Marial }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
        </div>
      </div>
      <div class="w-[300px] mt-5 lg:mt-0">
        <div class="*:mt-2">
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Html : </span>
            {{ useMe.mySkill.html }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Css : </span
            >{{ useMe.mySkill.css }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Vue : </span
            >{{ useMe.mySkill.vue }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">JavaScript : </span
            >{{ useMe.mySkill.js }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Tailwind : </span
            >{{ useMe.mySkill.tailwind }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">Bootstrap : </span
            >{{ useMe.mySkill.boot }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
          <h1 class="font-semibold flex items-center text-white leading-7 text-sm">
            <i class="fa-regular fa-circle-check  text-[#64ffda]"></i>
            <span class="text-[#64ffda] mx-3">React : </span
            >{{ useMe.mySkill.react }}
          </h1>
          <!-- <hr class="border border-[#64ffda]" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
