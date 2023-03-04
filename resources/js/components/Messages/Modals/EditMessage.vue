<template>
    <div class="modal fade" id="editMessage" tabindex="-1" aria-labelledby="Edit message" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="Add account">Редактирование сообщения</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <MessageStatus :type="data.status" />
                    <span>{{ data.created_at }}</span>

                    <div class="input-group mb-3">
                        <span class="input-group-text">Имя</span>
                        <input class="form-control" type="text" :value="data.name">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Телефон</span>
                        <input class="form-control" type="text" :value="data.telephone">
                    </div>
                    <div class="input-group mb-3">

                        <textarea class="form-control" type="text" :value="data.message"></textarea>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary">Закрыть</button>
                    <button type="submit" class="btn btn-success">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import MessageStatus from '../MessageStatus.vue'

    export default {
        components: { MessageStatus },
        data() {
            return {
                data: ''
            }
        }
    }

</script>

<style scoped lang="scss">

</style>
