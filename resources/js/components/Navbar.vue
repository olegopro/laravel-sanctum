<template>
   <nav class=" col-6 mx-auto nav nav-pills nav-fill">
       <router-link v-if="x_xsfr_token" :to="{name: 'dashboard'}" class="nav-link">Главная</router-link>
       <router-link v-if="!x_xsfr_token" :to="{name: 'helpdesk'}" class="nav-link">Обратная связь</router-link>
       <router-link v-if="!x_xsfr_token" :to="{name: 'user.login'}" class="nav-link">Вход</router-link>
       <router-link v-if="x_xsfr_token" :to="{name: 'user.messages'}" class="nav-link">Сообщения</router-link>
       <router-link v-if="x_xsfr_token" :to="{name: 'settings'}" class="nav-link">Настройки</router-link>
       <router-link v-if="!x_xsfr_token" :to="{name: 'user.registration'}" class="nav-link">Регистрация</router-link>
       <a v-if="x_xsfr_token" @click.prevent="logout" href="#" class="nav-link">Выход</a>
   </nav>
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

<style scoped lang="scss">
    nav {
        padding-top: 30px;
        padding-bottom: 30px;

        .nav-link {
            color: #636363;

            &:hover {
                color: #000000;

                &.active {
                    color: white
                }
            }
        }
    }
</style>
