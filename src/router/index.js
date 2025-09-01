import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Import your pages
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import UploadDocument from '@/views/UploadDocument.vue'

// import ForgotPassword from '@/views/ForgotPassword.vue'

const routes = [
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
    path: '/',
    name: 'dashboard',
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [{ path: 'upload-document', name: 'UploadDocument', component: UploadDocument }],
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
