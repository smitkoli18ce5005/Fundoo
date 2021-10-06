import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Registration/Registration.vue'
import Todoos from '../views/Todoos/Todoos.vue'
import Signin from '../views/Signin/Signin.vue'
import ForgetPassword from '../views/ForgetPassword/ForgetPassword.vue'
import ResetPassword from '../views/ResetPassword/ResetPassword.vue'

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
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: Signin
  },
  {
    path: '/forgetPassword',
    name: 'forgePassword',
    component: ForgetPassword
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: ResetPassword
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
