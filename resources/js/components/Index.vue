<template>
    <div>
        <router-link v-if="token" :to="{name: 'dashboard'}">Главная</router-link>
        <router-link v-if="!token" :to="{name: 'user.login'}">Вход</router-link>
        <router-link v-if="token" :to="{name: 'user.personal'}">Personal</router-link>
        <router-link v-if="!token" :to="{name: 'user.registration'}">Регистрация</router-link>
        <a v-if="token" @click.prevent="logout" href="#">Выход</a>

        <router-view />
    </div>
</template>

<script>
    export default {
        data(){
            return{
                token: null
            }
        },

        mounted() {
            console.log(this.token)
            this.getToken()
        },

        updated() {
            console.log(this.token)
            this.getToken()
        },

        methods: {
            getToken(){
                this.token = localStorage.getItem('x_xsrf_token')
            },

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
