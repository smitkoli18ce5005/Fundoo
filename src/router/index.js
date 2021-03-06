import { createRouter, createWebHistory } from 'vue-router'
import Todoos from '../views/Todoos/Todoos.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import SignIn from '../views/SignIn/SignIn.vue'
import ForgetPassword from '../views/ForgetPassword/ForgetPassword.vue'
import ResetPassword from '../views/ResetPassword/ResetPassword.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import Archive from '../views/Archive/Archive.vue'
import Trash from '../views/Trash/Trash.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/Dashboard',
    component: SignIn
  },
  {
    path: '/Todoos',
    name: 'Todoos',
    component: Todoos
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/ForgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/ResetPassword/:token',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/Trash',
    name: 'Trash',
    component: Trash
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
