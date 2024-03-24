import { defineStore } from "pinia";
const useProjects = defineStore("project", {
  state: () => {
    return {
      myProjects: [
        {
          id: 1,
          projectName: "Air-bnb",
          projectUrl: "/airbnb.svg",
          imageUrl: "/air-bnb.png",
          demoLink: "https://air-bnb-lemon.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/Air-bnb",
          desEng: `
          This is the name of the current web app, which is similar to the AirBnb app. The app allows users to search for and book accommodations such as hotels and apartments. By clicking on the "Anywhere" button, users can search for accommodations in any location. By clicking on the search icon, users can also check the weather.
          In the weather feature, users can see current weather conditions to plan their activities accordingly. When users are searching for accommodations and encounter bad weather conditions, they can easily change their plans and search for alternative options.
          Features such as login, sign up, and adding favorites for guests are available. Other features like editing account details are accessible for registered users. For those who don't have an account, they can easily register or log in by clicking on the user button.
          If a user is not logged in, they can still access the weather feature but cannot save preferences. After registering or logging in, they can return to the home screen by clicking on the home icon. Users can also save their favorite accommodations by clicking on the heart icon.
          There are four main pages: the stay page, online experience page, register page, and single page. The experience page is primarily a UI interface.
          `,
          language: "JS",
          framework: "Taiwind , Vue",
          dataStore: "Pinia",
          Api: "Air-Bnb listings , weather Api",
        },
        {
          id: 2,
          projectName: "Spotify",
          projectUrl: "/Spotify_logo_with_text.svg.webp",
          imageUrl: "/spotify.png",
          demoLink: "https://spotify-clone-rosy-five.vercel.app",
          sorceCodeLink: "https://github.com/WaiYanLatt/Spotify-clone",
          desEng: `
          The name of this web app is similar to Spotify. 
          Users can search for top 10 songs and recent songs they've listened to on this site.
          To utilize these features, users need to have a Spotify account, ensuring 100% security of their personal information. 
          Through the Spotify API, users can access their account and interact with the server to retrieve their favorite songs.
          After opening their account, users can enjoy listening to their selected songs and refresh the page to explore more.
          It ensures that users can easily access their preferred songs on the site.
          Note: VPN is required to access Spotify account.
          `,
          language: "JS",
          framework: "Taiwind , Vue",
          dataStore: "Pinia",
          Api: "Spotify Web Api",
        },
        {
          id: 3,
          projectName: "Brand",
          projectUrl: "/icon.png",
          imageUrl: "/brnad.png",
          demoLink: "https://brand-dusky.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/Brand",
          desEng: `
           The name of this current web app is Brand Shop App. 
           This app facilitates various features such as searching for products, 
           purchasing products, adding products to the wishlist or removing them, 
           viewing product details, categorizing products, and filtering products based on desired
           features.
          `,
          language: "JS",
          framework: "Taiwind , Vue",
          dataStore: "Pinia",
          Api: "Dummy Store Api",
        },
        {
          id: 4,
          projectName: "Todo-App",
          projectUrl: "/Microsoft_To-Do_icon.png",
          imageUrl : '/todo.png',
          demoLink: "https://todo-app-pinia.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/Todo-App-pinia",
          desEng: `
          The name of this web app is Todo-App. Users can create,
          read, update, and delete todo lists using this app. CRUD stands for Create, 
          Read, Update, and Delete, which are the rules used to manage data within the app. 
          Users can add todo items through an add todo form, and they can edit or delete the 
          added todos as needed. The app stores data in the LocalStorage, allowing users to access
          their todos across sessions. Users can mark completed todos and filter out completed 
          todos to focus on the remaining ones.
          `,
          language: "JS",
          framework: "Taiwind , Vue",
          dataStore: "Pinia",
          Api: "none",
        },
        {
          id: 5,
          projectName: "Social-Media-APP",
          projectUrl: "/heart.png",
          imageUrl : '/social.png ',
          demoLink: "https://social-media-with-props.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/social-media-with-props",
          desEng: `
          The name of this current web app is Social Media App. 
          The site allows users to post, login, and delete posts. 
          Once a user logs in, they can access their profile and view all the posts they've made.
          They can also create new posts by clicking on "create post" and then submitting their new post. 
          Note for users who haven't yet created an account, the emails available for signing up are: 1. lisa@gmail.com, 2. jisso@gmail.com, 3. rose@gmail.com, 4. jennie@gmail.com, 5. vonzy@gmail.com, 6. sze@gmail.com. The password for all these emails is '12345'.
          `,
          language: "JS",
          framework: "Taiwind , Vue",
          dataStore: "Pinia",
          Api: "none",
        },
        {
          id: 6,
          projectName: "Dictionary-E-to-E",
          projectUrl: "/dict.png",
          imageUrl : '/etoe.png',
          demoLink: "https://dictionary-e-to-e.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/Dictionary-E-to-E",
          desEng: `
          The name of this current web app is Dictionary-E-to-E.
          This site allows users to enter words they want to search for in the search box,
          and then provides definitions in English. Users can search for English words and get
          their definitions in English. This app utilizes the Urban Dictionary API 
          to fetch definitions. Therefore, it primarily functions as an Urban Dictionary 
          search tool.
          `,
          language: "JS",
          framework: "Taiwind , Vue",
          dataStore: "Pinia",
          Api: "Urban Dictionary",
        },
        {
          id: 7,
          projectName: "User Management",
          projectUrl: "/user.jfif",
          imageUrl : '/use.png',
          demoLink: "https://user-management-with-pinia.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/User-Management-With-Pinia",
          desEng: `
          The name of this current web app is User Management App.
          This site allows users to perform CRUD operations on users, meaning they can Create, Read, Update, and Delete user data according to specific rules and permissions.
          In CRUD:
          Create: Users can add new users via a create user form.
          Read: Users can view existing user data.
          Update: Users can modify or update existing user information.
          Delete: Users can delete user records from the system.
          The User Management App provides functionalities for managing users efficiently and securely, adhering to established rules and permissions.
          `,
          language: "JS",
          framework: "Taiwind , Vue",
          dataStore: "Pinia",
          Api: "none",
        },
        {
          id: 8,
          projectName: "Text for Voice",
          projectUrl: "/voice.png",
          imageUrl : '/tforv.png',
          demoLink: "https://vue-mini-project-sigma.vercel.app/Voice%20System/voice.html",
          sorceCodeLink: "https://github.com/WaiYanLatt/Vue-Mini-Project/tree/main/Voice%20System",
          desEng: `
          The name of this current web app is Text for Voice App.
          This app allows users to input text into a form and convert it into spoken words.
          Users can enter text in the provided input field, and the app will generate speech based on the input text. 
          `,
          language: "JS",
          framework: "Vue",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 9,
          projectName: "Facebook",
          projectUrl: "/facebook.png",
          imageUrl : '/face.png',
          demoLink: "https://facebook-app-jet.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/Facebook-App",
          desEng: `
          The name of this current website is Facebook.
          This website primarily focuses on providing a user interface (UI) for users to interact with.
          Unlike a web app, it doesn't have extensive features related to data manipulation or complex functionalities.
          Instead, its main purpose is to offer a platform for users to connect, share content, and communicate with each other through posts, messages, and various other social interactions.
          `,
          language: "JS",
          framework: "Tailwind",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 10,
          projectName: "League of legend",
          projectUrl: "/logo-removebg-preview.png",
          imageUrl : '/lol.jpg',
          demoLink: "https://league-of-legend-3vi3.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/League-of-legend",
          desEng: `
          The name of this current website is League of Legends.
          This website primarily focuses on providing a user interface (UI) for users to interact with.
          Unlike a web app, it doesn't have extensive features related to data manipulation or complex functionalities.
          Instead, its main purpose is to offer information, updates, news, and resources related to the game "League of Legends," such as game guides, patch notes, player statistics, and community forums.
          `,
          language: "JS",
          framework: "Bootstrap",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 11,
          projectName: "Epic Games",
          projectUrl: "/epic.png",
          imageUrl: "/epicgame.jpg",
          demoLink: "http://epic-games-ecru.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/EpicGames",
          desEng: `
           The name of this current website is Epic Games.
           This website primarily focuses on providing a user interface (UI) for users to interact with.
           Unlike a web app, it doesn't have extensive features related to data manipulation or complex functionalities.
           Instead, its main purpose is to offer information, updates, and resources related to the Epic Games store, games published by Epic Games, as well as news, events, and community forums related to gaming.
          `,
          language: "JS",
          framework: "Bootstrap",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 12,
          projectName: "Netflix",
          projectUrl: "/net.jpg",
          imageUrl : '/netflix1.jpg',
          demoLink: "http://netflix-movie.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/Netflix-Movie",
          desEng: `
          The name of this current website is Netflix.
          This website primarily focuses on providing a user interface (UI) for users to interact with.
          Unlike a web app, it doesn't have extensive features related to data manipulation or complex functionalities. 
          Instead, its main purpose is to offer a platform for users to stream movies, TV shows, documentaries, and other content provided by Netflix.
          `,
          language: "JS",
          framework: "Bootstrap",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 13,
          projectName: "Ionic",
          projectUrl: "/iconic.png",
          imageUrl : '/ionic.jpg',
          demoLink: "https://ionic-sigma.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/ionic",
          desEng: `
          The name of this current website is Ionic.
          This website primarily focuses on providing a user interface (UI).
          Unlike a web app, it only offers UI components without data-related features.
          `,
          language: "JS",
          framework: "Tailwind",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 14,
          projectName: "Taxpal",
          projectUrl: "/taxpal.png",
          imageUrl : '/taxpal.jpg',
          demoLink: "https://tax-pal-iota.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/Tax-pal",
          desEng: `
          The name of this current website is Taxpal.
          This website primarily focuses on providing a user interface (UI) only.
          It doesn't have data-related features like a web app.
          `,
          language: "JS",
          framework: "Tailwind",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 15,
          projectName: "Truelife",
          projectUrl: "/truelife.png",
          imageUrl : '/food.jpg',
          demoLink: "https://trulife-food-delivery.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/trulife-food-delivery",
          desEng: `
          The name of this current website is Truelife.
          This website primarily focuses on providing a user interface (UI) only.
          It doesn't have data-related features like a web app.
          `,
          language: "JS",
          framework: "Bootstrap",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 16,
          projectName: "NIKE",
          projectUrl: "/nike.png",
          imageUrl : '/nike.jpg',
          demoLink: "https://nike-gamma.vercel.app/",
          sorceCodeLink: "https://github.com/WaiYanLatt/NIKE",
          desEng: `
          The name of this current website is NIKE.
          This website primarily focuses on providing a user interface (UI) only.
          It doesn't have data-related features like a web app.
          `,
          language: "JS",
          framework: "Bootstrap",
          dataStore: "none",
          Api: "none",
        },
        {
          id: 17,
          projectName: "Servery Form",
          projectUrl: "/servery.png",
          imageUrl : '/ser.png',
          demoLink: "https://vue-mini-project-sigma.vercel.app/serveryForm/servery.html",
          sorceCodeLink: "https://github.com/WaiYanLatt/Vue-Mini-Project/tree/main/serveryForm",
          desEng: `
          The name of this current site is Survey Form.
          This site allows users to submit survey responses. 
          Users can fill out various survey questions and submit their responses.
          Once a user submits their response, they cannot submit another one. 
          The primary purpose of the site is to collect feedback or data through surveys.
          `,
          language: "JS",
          framework: "Vue",
          dataStore: "none",
          Api: "none",
        },
      ],
      filterStatus: "all",
    };
  },
  getters: {
    filterProjects() {
      if (this.filterStatus === "all") {
        return this.myProjects;
      } else if (this.filterStatus === "vue , tailwind") {
        const tailwindVue = this.myProjects.filter(
          (pro) => pro.framework === "Taiwind , Vue"
        );
        return tailwindVue;
      } else if (this.filterStatus === "tailwind") {
        const tailWind = this.myProjects.filter(
          (pro) => pro.framework === "Tailwind"
        );
        return tailWind;
      } else if (this.filterStatus === "bootstrap") {
        const bootStrap = this.myProjects.filter(
          (pro) => pro.framework === "Bootstrap"
        );
        return bootStrap;
      } else if (this.filterStatus === "vue") {
        const Vue = this.myProjects.filter((pro) => pro.framework === "Vue");
        return Vue;
      } else if (this.filterStatus === "api") {
        const Api = this.myProjects.filter((pro) => pro.Api !== "none");
        return Api;
      }
    },
  },
  actions: {
    setFilterStatus(para) {
      this.filterStatus = para;
    },
  },
});
export default useProjects;
