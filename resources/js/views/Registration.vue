<template>
    <div class="col-6 mt-5 mx-auto">
        <h1>Регистрация</h1>

        <form @submit.prevent="register">
            <div class="mb-3">
                <label for="name" class="form-label">Имя</label>
                <input v-model="name" type="name" class="form-control" id="name" placeholder="Имя">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Почта</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Пароль</label>
                <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation">
            </div>

            <button type="submit" class="btn btn-primary">Вход</button>
        </form>
    </div>

</template>

<script>
    export default {

        data() {
            return {
                name: null,
                mail: null,
                password: null,
                password_confirmation: null

            }
        },

        methods: {
            register() {
                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post('/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    })
                        .then(response => {
                            localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({name: 'dashboard'})
                        })
                        .catch(error => console.log(error.response))
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
