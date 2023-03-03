import { createRouter, createWebHistory } from 'vue-router'
import Get from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import Personal from './components/Personal.vue'

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
    },
    {
        path: '/user/personal',
        component: Personal,
        name: 'user.personal'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // linkActiveClass: 'active'
})

export default router



