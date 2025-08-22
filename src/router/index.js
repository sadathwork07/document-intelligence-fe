import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import AppLayout from '@/components/layout/AppLayout.vue'
// import ForgotPassword from '@/views/ForgotPassword.vue'

const routes = [
  {
    path: '/',
    redirect: '/login' // default page
  },
  {
    path: '/signup',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashbaord',
    name: 'dashbaord',
    component: AppLayout
  }
  // {
  //   path: '/forgot-password',
  //   name: 'ForgotPassword',
  //   component: ForgotPassword
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
