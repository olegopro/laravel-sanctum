<template>
    <router-link v-if="x_xsfr_token" :to="{name: 'dashboard'}">Главная</router-link>
    <router-link v-if="!x_xsfr_token" :to="{name: 'user.login'}">Вход</router-link>
    <router-link v-if="x_xsfr_token" :to="{name: 'user.personal'}">Personal</router-link>
    <router-link v-if="!x_xsfr_token" :to="{name: 'user.registration'}">Регистрация</router-link>
    <a v-if="x_xsfr_token" @click.prevent="logout" href="#">Выход</a>
</template>

<script>
    export default {
        inject: ['token'],

        data(){
            return {
                x_xsfr_token: this.token
            }
        },

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
