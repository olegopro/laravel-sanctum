<template>
    <div class="modal fade" id="deleteMessage" tabindex="-1" aria-labelledby="Delete Message" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="Delete account">Удаление аккаунта</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Удалить аккаунт с логином <strong>логин</strong></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="modalHide">Отмена</button>
                    <button type="submit" data-bs-dismiss="modal" class="btn btn-danger">Удалить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { Modal } from 'bootstrap'

    export default {

        mounted() {
            this.modal = new Modal(document.getElementById('deleteMessage'))
        },

        methods: {
            modalHide() {
                this.modal.hide()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
