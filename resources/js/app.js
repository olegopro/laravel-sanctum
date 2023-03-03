import { createApp } from 'vue'
import index from './components/Index.vue'
import router from './router'

require('./bootstrap')


createApp(index)
    .use(router)
    .mount('#app')
