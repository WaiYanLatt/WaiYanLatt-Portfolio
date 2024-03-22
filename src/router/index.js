import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: "/about",
    name: "About",
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: "/service",
    name: "Service",
    component: () => import('@/views/Service.vue'),
  },
  {
    path: "/project",
    name: "Project",
    component: () => import('@/views/Projects.vue'),
  },
  {
    path: '/project/:id',
    name: "single-page",
    component: () => import('@/views/SinglePage.vue'),
  },
  {
    path: '/contact',
    name: "Contact",
    component: () => import('@/views/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});



export default router;
