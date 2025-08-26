import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

// app.use(createPinia())
app.use(pinia) // ✅ register Pinia
app.use(router)
app.mount('#app')
