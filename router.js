import { createRouter, createWebHistory } from "vue-router";

// Import all pages
import home from "/pages/home.vue";
import index from "/pages/index.vue";
import pricing from "/pages/pricing.vue";

const routes = [
  { path: "/", component: index },
  { path: "/pages/home.vue", component: home },
  { path: "/pages/pricing.vue", component: pricing },

  { path: "/", component: index }, // Keep this as the main entry point
  { path: "/home", component: home }, // Change this to a different path
  { path: "/pricing", component: pricing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
