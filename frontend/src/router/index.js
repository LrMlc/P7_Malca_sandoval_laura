import { createWebHistory, createRouter } from "vue-router";
import login from "@/views/login.vue";
import home from "@/views/home.vue";

const routes = [
    { 
    path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
    },
    { 
      path: '/home', 
      name: 'home',
      component: () => import('../views/home.vue'), 
      props:true 
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
export default router;