<template>
    <div class="modal fade" id="deleteMessage" tabindex="-1" aria-labelledby="Delete Message" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form @submit.prevent="deleteMessageById" class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="Delete account">Удаление аккаунта</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-0">Удалить аккаунт с id: <strong>{{ id }}</strong></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="modalHide">Отмена</button>
                    <button type="submit" class="btn btn-danger" :disabled="closePopup">Удалить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { Modal } from 'bootstrap'

    export default {
        inject: ['closeMessagePopup'],
        emits: ['delete-message'],

        data() {
            return {
                id: null,
                closePopup: this.closeMessagePopup
            }
        },

        watch: {
            closePopup(value) {
                if (value) this.modalHide()
            }
        },

        mounted() {
            this.modal = new Modal(document.getElementById('deleteMessage'))
        },

        methods: {
            deleteMessageById() {
                this.$emit('delete-message', this.id)
            },

            modalHide() {
                this.modal.hide()
            }
        }
    }
</script>
