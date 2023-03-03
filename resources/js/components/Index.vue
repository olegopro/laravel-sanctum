<template>
    <div>
        <router-link :to="{name: 'get.index'}">Главная</router-link>
        <router-link :to="{name: 'user.login'}">Вход</router-link>
        <router-link :to="{name: 'user.personal'}">Personal</router-link>
        <router-link :to="{name: 'user.registration'}">Регистрация</router-link>
        <a @click.prevent="logout" href="#">Выход</a>

        <router-view />
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                axios.post('/logout')
                    .then(() => {
                        localStorage.removeItem('x_xsrf_token')
                        this.$router.push({ name: 'user.login' })
                    })
            }
        }
    }
</script>
