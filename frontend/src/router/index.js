import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/views/login.vue'
import home from '@/views/home.vue'
import post from '@/views/post.vue'
import profil from '@/views/profil.vue'
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
  },
  {
    name:"post",
    path:'/post/:postId',
    component: post
  },
{
  name:"profil",
  path:'/profil',
  component: profil
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
