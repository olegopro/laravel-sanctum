<template>
    <div class="col-6 mt-5 mx-auto">
        <h1>Вход</h1>

        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="email" class="form-label">Почта</label>
                <input v-model="email" type="text" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div v-if="errors?.email" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.email">
                        {{ message }}
                    </span>
            </div>
            <div v-if="errors?.password" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.password">
                        {{ message }}
                    </span>
            </div>

            <button type="submit" class="btn btn-primary w-100">Вход</button>
        </form>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                email: null,
                password: null,
                errors: null
            }
        },

        methods: {
            login() {

                axios.post('/api/login', {
                    email: this.email,
                    password: this.password
                })
                    .then(response => {
                        localStorage.setItem("token", response.data.token)
                        window.axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`

                        this.$router.push({ name: 'user.messages' })
                    })
                    .catch(error => {
                        return this.errors = error.response.data.errors
                    })
            }
        }
    }
</script>
