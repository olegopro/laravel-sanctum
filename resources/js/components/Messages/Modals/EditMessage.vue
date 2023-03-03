<template>
    <div class="modal fade" id="editMessage" tabindex="-1" aria-labelledby="Edit message" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="Add account">Редактирование сообщения</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <span class="input-group-text">Access token</span>

                        <input
                            aria-describedby="access-token"
                            aria-label="Access token"
                            class="form-control"
                            type="text"
                        >

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" >Отмена</button>
                    <button type="submit" class="btn btn-success" >Добавить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">

</style>
