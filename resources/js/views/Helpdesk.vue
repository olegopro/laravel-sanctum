<template>
    <div class="col-6 mx-auto mt-5">
        <h1>Сообщение в техподдержку</h1>

        <form @submit.prevent="sendMessage">

            <div class="mb-3">
                <label for="name" class="form-label">Ваше имя</label>
                <input v-model="name" type="text" class="form-control" id="name">
                <div v-if="errors?.name" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.name">
                        {{ message }}
                    </span>
                </div>
            </div>

            <div class="mb-3">
                <label for="telephone" class="form-label">Телефон</label>
                <input v-model="telephone" type="tel" v-mask="'+7 (###) ###-##-##'" class="form-control" id="telephone">
                <div v-if="errors?.telephone" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.telephone">
                        {{ message }}
                    </span>
                </div>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Сообщение</label>
                <textarea v-model="message" type="text" class="form-control" id="message"></textarea>
                <div v-if="errors?.message" class="alert alert-danger mt-3" role="alert">
                    <span v-for="message in errors.message">
                        {{ message }}
                    </span>
                </div>
            </div>

            <button type="submit" class="btn btn-primary w-100 mb-3">Отправить сообщение</button>

            <div v-if="sendSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Сообщение отправлено!</strong> Ждите, Вам скоро ответят.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </form>
    </div>
</template>

<script>
    import { mask } from 'vue-the-mask'

    export default {
        directives: { mask },

        data() {
            return {
                name: null,
                telephone: null,
                message: null,
                errors: null,
                sendSuccess: false
            }
        },

        methods: {
            async sendMessage() {
                await axios.post('http://localhost/api/add-message', {
                    name: this.name,
                    telephone: this.telephone,
                    message: this.message,
                    status: 'waiting'
                }).then(() => {
                    this.name = this.telephone = this.message = this.errors = null
                    this.sendSuccess = true

                }).catch(error => {
                    this.errors = error.response.data.errors
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
