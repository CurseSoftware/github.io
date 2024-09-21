import { createRouter, createWebHistory } from "vue-router";

// Import your page components
import Home from '../components/Home.vue';

// Define routes
const routes = [
  { path: '/', component: Home },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;