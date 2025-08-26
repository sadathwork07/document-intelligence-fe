import { defineStore } from 'pinia'
import api from '@/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null,
    user: null,
  }),
  actions: {
    async login(email, password) {
      const formData = new URLSearchParams()
      formData.append('username', email)
      formData.append('password', password)

      const res = await api.post('/auth/login', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      this.accessToken = res.data.access_token
      this.user = res.data.user
    },
    async refresh() {
      const res = await api.post('/auth/refresh')
      this.accessToken = res.data.access_token
      this.user = res.data.user
    },
    async logout() {
      await api.post('/auth/logout')
      this.accessToken = null
      this.user = null
    },
  },
})
