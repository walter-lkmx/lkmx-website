import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router