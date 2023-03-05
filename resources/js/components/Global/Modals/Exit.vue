<template>
    <div class="modal fade" id="exitPopup" tabindex="-1" aria-labelledby="Exit Popup" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="Delete account">Выход из системы</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-0">Вы уверены, что хотите выйти?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="modalHide">Закрыть</button>
                    <button type="submit" class="btn btn-danger" @click="logout">Выйти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Modal } from 'bootstrap'

    export default {
        emits: ['exit'],

        mounted() {
            this.modal = new Modal(document.getElementById('exitPopup'))
        },

        methods: {
            logout(){
                this.modalHide()
                this.$emit('exit')
            },

            modalHide() {
                this.modal.hide()
            }
        }
    }
</script>
