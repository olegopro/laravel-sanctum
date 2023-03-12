<template>
    <div class="col-6 mt-5 mx-auto">
        <h1>Регистрация</h1>

        <form @submit.prevent="register">
            <div class="mb-3">
                <label for="name" class="form-label">Имя</label>
                <input v-model="name" type="text" class="form-control" id="name" placeholder="Имя">
                <div v-if="errors?.name" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.name">
                        {{ message }}
                    </span>
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Почта</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com">
                <div v-if="errors?.email" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.email">
                        {{ message }}
                    </span>
                </div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div v-if="errors?.password" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.password">
                        {{ message }}
                    </span>
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Повторите пароль</label>
                <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation">
            </div>
            <div v-if="errors?.password_confirmation" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.password_confirmation">
                        {{ message }}
                    </span>
            </div>

            <button type="submit" class="btn btn-primary w-100">Зарегистрироваться</button>
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
                password_confirmation: null,
                errors: null

            }
        },

        methods: {
            register() {
                    axios.post('/api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    })
                        .then(response => {
                            localStorage.setItem("token", response.data.token)
                            window.axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`

                            this.$router.push({ name: 'user.messages' })
                        })
                        .catch(error =>  this.errors = error.response.data.errors)
                }
            }
    }
</script>

<style scoped lang="scss">

</style>
