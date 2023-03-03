<template>
    <div class="col-6 mt-5 mx-auto">
        <h1>Вход</h1>

        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="email" class="form-label">Почта</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>

            <button type="submit" class="btn btn-primary">Вход</button>
        </form>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                email: null,
                password: null
            }
        },

        methods: {
            login() {
                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post('/login', {
                        email: this.email,
                        password: this.password
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
