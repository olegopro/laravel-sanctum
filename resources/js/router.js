import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import Messages from './views/Messages.vue'
import MainLayout from './layouts/MainLayout.vue'
import Helpdesk from './views/Helpdesk.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        name: 'index',
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/helpdesk',
        component: Helpdesk,
        name: 'helpdesk',
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/user/login',
        component: Login,
        name: 'user.login',
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/user/registration',
        component: Registration,
        name: 'user.registration',
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/user/messages',
        component: Messages,
        name: 'user.messages',
        meta: {
            layout: 'main'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.registration' || to.name === 'helpdesk') {
            return next()
        } else {
            return next({ name: 'helpdesk' })
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
