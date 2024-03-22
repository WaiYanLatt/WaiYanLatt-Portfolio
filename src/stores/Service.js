import { defineStore } from "pinia";
const useService = defineStore("service", {
  state: () => {
    return {
      service: [
        {
          id: 1,
          icon: "fa-solid fa-crop",
          serviceType: "UI-UX DESIGN",
          Des: "I can design prototypes by using Figma, Ai, and Photoshop. However, this is not my specialty.",
        },
        {
          id: 2,
          icon: "fa-solid fa-layer-group",
          serviceType: "UI-UX DEVELOPE",
          Des: "I can develop designs provided by UI/UX designers using HTML, CSS, and JavaScript.",
        },
        {
          id: 3,
          icon: "fa-solid fa-code",
          serviceType: "FRONT-END DEVELOPMENT",
          Des: "I can develop websites provided by UI/UX designers using Vue and Tailwind, as well as React and Tailwind. However, React is not my specialty.",
        },
        {
          id: 4,
          icon: "fa-solid fa-circle-nodes",
          serviceType: "CONNECT WITH APIs",
          Des: "I can integrate with back-end developers who provide APIs using Pinia for reading Insomnia.",
        },
      ],
    };
  },
});
export default useService;
