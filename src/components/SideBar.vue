<script>
export default {
  data() {
    return {
       SideBar : false,
    };
  },
  methods: {
    showBar(){
      this.SideBar = !this.SideBar;
    },
    unShowBar(){
      this.SideBar = false;
    },
  },
};
</script>

<template>
  <aside>
    <div :class="{'left-[0%]' : SideBar === true}" class="w-72 duration-500 z-10 lg:left-0 left-[-100%] lg:min-h-screen h-full bg-slate-900 fixed top-0 shadow-sm">
      <div class="bg-slate-900 p-5">
        <img src="/dev.gif" class="w-full h-[230px]" alt="" />
      </div>
      <div class="lg:px-10 px-5 pb-10 pt-0">
        <ul>
          <router-link to="/">
            <li
              @click="unShowBar"
              class="bg-slate-900 text-white shadow-sm cursor-pointer duration-500 py-3 px-5 mt-3 rounded-md font-semibold"
              :class="{ '!text-[#64ffda] !shadow-[#64ffda]': $route.name === 'Home' }"
            >
              <i class="fa-solid fa-home mr-4"></i>
              HOME
            </li>
          </router-link>
          <router-link to="/about">
            <li
              @click="unShowBar"
              class="bg-slate-900 text-white shadow-sm cursor-pointer duration-500 py-3 px-5 mt-3 rounded-md font-semibold"
              :class="{ '!text-[#64ffda] !shadow-[#64ffda]':$route.name === 'About' }"
            >
              <i class="fa-solid fa-user mr-5"></i>
              ABOUT
            </li>
          </router-link>
          <router-link to="/service">
            <li
              @click="unShowBar"
              class="bg-slate-900 text-white shadow-sm cursor-pointer duration-500 py-3 px-5 mt-3 rounded-md font-semibold"
              :class="{
                '!text-[#64ffda] !shadow-[#64ffda]': $route.name === 'Service'
              }"
            >
              <i class="fa-solid fa-list mr-4"></i>
              SERVICES
            </li>
          </router-link>
          <router-link to="/project">
            <li
            @click="unShowBar"
            class="bg-slate-900 text-white shadow-sm cursor-pointer duration-500 py-3 px-5 mt-3 rounded-md font-semibold"
            :class="{ '!text-[#64ffda] !shadow-[#64ffda]':$route.name === 'Project' || $route.name === 'single-page'}"
          >
            <i class="fa-solid fa-briefcase mr-4"></i>
            PROJECTS
          </li>
          </router-link>
          <router-link to='/contact'>
          <li
            @click="unShowBar"
            class="bg-slate-900 text-white shadow-sm cursor-pointer duration-500 py-3 px-5 mt-3 rounded-md font-semibold"
            :class="{ '!text-[#64ffda] !shadow-[#64ffda]': $route.name === 'Contact' }"
          >
            <i class="fa-solid fa-message mr-4"></i>
            CONTACT
          </li>
          </router-link>
        </ul>
      </div>
    </div>
    <button @click="showBar" class="fixed lg:hidden left-0 z-10 top-5 text-white w-10 h-10 flex items-center justify-center rounded-tr-lg bg-[#64ffda]">
        <i class="fa-solid fa-angle-right text-2xl" v-show="SideBar === false"></i>
        <i class="fa-solid fa-xmark text-2xl" v-show="SideBar === true"></i>
    </button>
  </aside>
</template>
