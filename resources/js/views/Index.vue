<template>
    <div>
        <Navbar />
        <router-view />
    </div>
</template>

<script>
    import Navbar from '../components/Global/Navbar.vue'

    export default {
        components: { Navbar },
        data() {
            return {
                token: null
            }
        },

        updated() {
            console.log(this.myToken)
        },


        computed: {
            myToken() {
                this.getToken()
            }
        },

        methods: {
            getToken() {
                return localStorage.getItem('x_xsrf_token')
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
