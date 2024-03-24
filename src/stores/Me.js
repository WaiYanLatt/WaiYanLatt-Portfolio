import { defineStore } from "pinia";
const useMe = defineStore("me", {
  state: () => {
    return {
       myInfo : {
            name : 'Wai Yan Latt',
            age : 22 ,
            eduction : 'Second Year',
            major : 'Geophagy',
            university : 'Dagon',
            city : 'Yangon , South Dagon',
            country : 'Myanmar',
            email : 'waiyanlattdev@gmail.com',
            phone : '09740863737',
            gender : 'Male',
            Marial : 'Single',
            birth : '8.8.2001',
        },
        mySkill : {
           html : '95%',
           css : '95%',
           js : '80%',
           vue : '90%',
           react : '60%',
           tailwind : '95%',
           boot : '95%',
        },
    };
  },
});
export default useMe;