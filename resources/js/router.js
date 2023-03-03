import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import Personal from './components/Personal.vue'
import Index from './components/Index.vue'

const routes = [
    {
        path: '/index',
        component: Index,
        name: 'index'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard'
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
    history: createWebHistory(),
    routes
    // linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        } else {
            return next({ name: 'user.login' })
        }
    }

    if (to.name === 'user.login' || to.name === 'user.registration' && token) {
        return next({
            name: 'dashboard'
        })
    }

    next()
})

export default router
