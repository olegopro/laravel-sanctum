<template>
    <div class="modal fade" id="editMessage" tabindex="-1" aria-labelledby="Edit message" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form @submit.prevent="saveMessageData" class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="Add account">Редактирование сообщения</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <MessageStatus :type="data.status" />
                    <span>{{ data.created_at }}</span>

                    <div class="input-group mb-3">
                        <span class="input-group-text">Имя</span>
                        <input class="form-control" type="text" v-model="data.name">
                    </div>

                    <div v-if="messageError?.name" class="alert alert-danger mt-3" role="alert">
                        <span v-for="message in messageError.name">
                            {{ message }}
                        </span>
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text">Телефон</span>
                        <input class="form-control" type="text" v-model="data.telephone">
                    </div>

                    <div v-if="messageError?.telephone" class="alert alert-danger mt-3" role="alert">
                        <span v-for="message in messageError.telephone">
                            {{ message }}
                        </span>
                    </div>

                    <div class="input-group mb-3">

                        <textarea class="form-control" type="text" v-model="data.message"></textarea>
                    </div>

                    <div v-if="messageError?.message" class="alert alert-danger mt-3" role="alert">
                        <span v-for="message in messageError.message">
                            {{ message }}
                        </span>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="modalHide">Закрыть</button>
                    <button type="submit" class="btn btn-success" :disabled="loading">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import MessageStatus from '../MessageStatus.vue'
    import { Modal } from 'bootstrap'

    export default {
        components: { MessageStatus },
        inject: ['saveMessageErrors', 'saveMessageLoading', 'closeMessagePopup'],
        emits: ['save-message'],

        data() {
            return {
                data: '',
                messageError: this.saveMessageErrors,
                loading: this.saveMessageLoading,
                closePopup: this.closeMessagePopup
            }
        },

        watch: {
            closePopup(value) {
                if (value) this.modalHide()
            }
        },

        mounted() {
            this.modal = new Modal(document.getElementById('editMessage'))
        },

        methods: {
            saveMessageData() {
                this.$emit('save-message', {
                    id: this.data.id,
                    name: this.data.name,
                    telephone: this.data.telephone,
                    message: this.data.message,
                    status: this.data.status
                })
            },

            modalHide() {
                this.modal.hide()
            }
        }
    }

</script>
