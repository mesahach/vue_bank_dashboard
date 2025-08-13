import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVueNext from 'bootstrap-vue-next'
import VueApexCharts from 'vue3-apexcharts'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVueNext)
app.use(VueApexCharts)
app.use(Vue3Toastify, {
  autoClose: 3000,
})

app.mount('#app')
