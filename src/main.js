import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


const app = createApp(App)
const pinea = createPinia()



app.use(pinea)
app.use(router)

app.mount('#app')
