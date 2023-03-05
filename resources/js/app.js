import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import PerfectScrollbar  from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

require('./bootstrap')

createApp(App)
    .use(store)
    .use(router)
    .use(PerfectScrollbar)
    .mount('#app')

