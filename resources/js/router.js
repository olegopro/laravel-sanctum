import { createRouter, createWebHistory } from 'vue-router'
import Get from './components/Get.vue'
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'

const routes = [
    {
        path: '/get',
        component: Get,
        name: 'get.index'
    },
    {
        path: '/user/login',
        component: Login,
        name: 'user.login'
    },
    {
        path: '/user/registration',
        component: Registration,
        name: 'user.registration'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // linkActiveClass: 'active'
})

export default router



