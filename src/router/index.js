import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Import your pages
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import AppLayout from '@/components/layout/AppLayout.vue'

// import ForgotPassword from '@/views/ForgotPassword.vue'

const routes = [
  {
    path: '/',
    redirect: '/login', // default page
  },
  {
    path: '/signup',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AppLayout,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const auth = useAuthStore()
//   if (to.meta.requiresAuth && !auth.accessToken) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
