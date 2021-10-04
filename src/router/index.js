import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Registration/Registration.vue'
import Todoos from '../views/Todoos/Todoos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todoo',
    name: 'todoo',
    component: Todoos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
