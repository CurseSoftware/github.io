import { createRouter, createWebHistory } from "vue-router";

// Import your page components
import Home from '../components/Pages/Home/Home.vue';
import Engine from "../components/Pages/Engine/Engine.vue";

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/engine', component: Engine },
  
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;