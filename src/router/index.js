import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../components/Login.vue')
  },  
  {
    path: '/register',
    name: 'Register',
    component: ()=> import('../components/Register.vue')
  },  
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
