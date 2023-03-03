import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

require('./bootstrap')


createApp(App)
    .use(router)
    .mount('#app')
