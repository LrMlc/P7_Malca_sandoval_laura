import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/views/login.vue'
import home from '@/views/home.vue'

const routes = [
  { //ma page par défaut
    name: "home",
    path:'/home',
    component: home
  },
  {
    name:"login",
    path: '/',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
