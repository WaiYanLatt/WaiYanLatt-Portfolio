<script>
import useMe from "@/stores/Me.js";
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      useMe: useMe(),
      name: '',
      email: '',
      message: '',
      success : false,
      error : false,
    };
  },
  methods : {
    sendEmail() {
       if(this.email !== '' && this.name !== '' && this.message !== ''){
        const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      emailjs.send('service_rdcb56o', 'template_qaaenbn', templateParams, 'bwLUDA6msNThNO7OH')
        .then(response => {
          alert('EMAIL SENT SUCCESSFULLY');
        })
        .catch(error => {
          alert('EMAIL SENT FAILED');
        });
       } else {
         alert('PLEASE FILL EMAIL FORM')
       }
    }
  },
};
</script>

<template>
  <div class="animate__animated animate__fadeInRight">
    <div class="mt-10 lg:mt-0">
      <h1 class="text-secondary leading-10 text-3xl font-semibold">
        Contact Me
      </h1>
      <div class="w-20 mt-1 h-1 bg-[#64ffda]"></div>
      <div class="w-11 mt-1 h-1 bg-[#64ffda]"></div>
      <div class="mt-10 flex lg:flex-row flex-col md:flex-col-reverse">
        <div class="lg:w-[200px] w-full">
          <img
            src="/me.jpg"
            alt=""
            class="w-full md:hidden lg:block block h-auto border-[#64ffda] border-4 rounded-full object-cover"
          />
          <div class="mt-10 w-[300px]">
            <div class="*:mt-2">
              <h1
                class="font-semibold flex items-center text-white leading-7 text-sm"
              >
                <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
                <span class="text-[#64ffda] mx-3">Phone : </span
                >{{ useMe.myInfo.phone }}
              </h1>
              <h1
                class="font-semibold flex items-center text-white leading-7 text-sm"
              >
                <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
                <span class="text-[#64ffda] mx-3">Email : </span
                >{{ useMe.myInfo.email }}
              </h1>
              <h1
                class="font-semibold flex items-center text-white leading-7 text-sm"
              >
                <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
                <span class="text-[#64ffda] mx-3">City : </span
                >{{ useMe.myInfo.city }}
              </h1>
              <h1
                class="font-semibold flex items-center text-white leading-7 text-sm"
              >
                <i class="fa-regular fa-circle-check text-[#64ffda]"></i>
                <span class="text-[#64ffda] mx-3">Country : </span
                >{{ useMe.myInfo.country }}
              </h1>
            </div>
          </div>
        </div>
        <div class="w-full h-auto lg:ml-20 ml-0 lg:px-10 px-0">
          <h1 class="text-secondary font-semibold lg:text-xl text-md letter mt-10">
            YOU CAN SEND MAIL HERE.
          </h1>
          <div class="w-20 mt-3 h-1 bg-[#64ffda]"></div>
          <div class="w-11 mt-1 mb-10 h-1 bg-[#64ffda]"></div>
          <input
            type="text"
            v-model="name"
            name="name"
            id="name"
            class="w-full p-3 rounded-md text-sm bg-transparent focus:outline-none border border-[#64ffda] text-white font-semibold"
            placeholder="YOUR NAME"
          />
          <input
            type="email"
            name="email"
            v-model="email"
            id="email"
            class="w-full mt-5 p-3 rounded-md text-sm bg-transparent focus:outline-none border border-[#64ffda] text-white font-semibold"
            placeholder="YOUR EMAIL"
          />
          <textarea
            name="message"
            v-model="message"
            id="message"
            cols="30"
            rows="5"
            class="w-full mt-5 p-3  rounded-md text-sm bg-transparent focus:outline-none border border-[#64ffda] text-white font-semibold"
            placeholder="YOUR MESSAGE"
          ></textarea>
          <h1 class="text-white" v-show="success === true">kkkk</h1>
          <h1 class="text-white" v-show="error === true">reeo</h1>
          <button
               @click.prevent="sendEmail"
              class="border px-5 py-3 w-full text-sm mt-3 rounded-lg text-[#64ffda] hover:bg-[#64ffda] hover:text-black duration-500 font-semibold"
            >
              SEND EMAIL
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.letter {
  letter-spacing: 2px;
}
</style>
