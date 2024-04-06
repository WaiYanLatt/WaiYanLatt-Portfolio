<script>
import contactSection from '@/components/contactSection.vue'
   export default {
      data(){
        return {}
      },
      components : {
         contactSection : contactSection,
      }
   }
</script>

<template>
     <div class="bg-[#0a192f]  lg:px-10 md:px-10 px-5 py-10 min-h-screen lg:ml-72 ml-0 overflow-hidden">
        <contactSection/>
     </div>
</template>