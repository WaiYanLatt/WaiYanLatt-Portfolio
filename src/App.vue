<script>
import SideBar from "@/components/SideBar.vue";
   export default {
      data() {
         return {

         }
      },
      components : {
        SideBar : SideBar,
      }
   }
</script>


<template>
  <div class="flex">
    <SideBar/>
    <router-view class="w-full"></router-view>
  </div>
</template>