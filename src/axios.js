import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001/',
  withCredentials: true, // ✅ allows cookies for refresh token
  timeout: 10000,
})

// --- Request Interceptor: attach access token ---
api.interceptors.request.use((config) => {
  const store = useAuthStore()
  if (store?.accessToken) {
    config.headers.Authorization = `Bearer ${store.accessToken}`
  }
  return config
})

// --- Response Interceptor: auto-refresh on 401 ---
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const store = useAuthStore()

    if (err.response?.status === 401 && !err.config._retry) {
      err.config._retry = true
      try {
        // refresh will use cookie
        await store.refresh()
        err.config.headers.Authorization = `Bearer ${store.accessToken}`
        return api(err.config) // retry request
      } catch (refreshError) {
        store.logout()
      }
    }
    return Promise.reject(err)
  },
)

export default api
