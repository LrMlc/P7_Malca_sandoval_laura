import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/views/login.vue'
import store from '@/store/index.js'

const routes = [
  { //ma page par défaut
    name: "home",
    path:'/',
    component: home,
    header,
    nav
  },
  {
    name:"login",
    path: '/login',
    component: login,
    header
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
