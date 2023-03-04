<template>
    <div class="row mb-3 align-items-center">
        <div class="col">
            <h1 class="h2">Сообщения</h1>
        </div>
        <div class="col">
            <button class="btn btn-success btn-action float-end"
                    data-bs-target="#addAccount"
                    data-bs-toggle="modal"
                    type="button">
                Обновить
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <table class="table table-hover" v-if="getMessages.length">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Дата</th>
                        <th scope="col">Сообщение</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="message in getMessages" :key="message.id">
                        <th scope="row">{{ message.id }}</th>
                        <td>{{ message.name }}</td>
                        <td>{{ message.telephone }}</td>
                        <td>{{ message.created_at }}</td>
                        <td>{{ message.message }}</td>
                        <td>
                            <MessageStatus :type="message.status" />
                        </td>
                        <td>
                            <button
                                class="btn btn-primary me-2 button-style"
                                data-bs-target="#editMessage"
                                data-bs-toggle="modal"
                                type="button"
                                @click="setDataMessage(message.id)"
                            >
                                <svg width="16" height="16">
                                    <use xlink:href="#info"></use>
                                </svg>
                            </button>

                            <button
                                class="btn btn-danger button-style"
                                data-bs-target="#deleteMessage"
                                data-bs-toggle="modal"
                                type="button"
                            >
                                <svg width="16" height="16">
                                    <use xlink:href="#delete"></use>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 v-else class="text-center">Список аккаунтов пустой</h3>
        </div>
    </div>

    <Teleport to="body">
        <DeleteMessage />
        <EditMessage ref="EditMessage" @save-message="saveMessage" />
    </Teleport>

</template>

<script>
    import MessageStatus from '../components/Messages/MessageStatus.vue'
    import DeleteMessage from '../components/Messages/Modals/DeleteMessage.vue'
    import EditMessage from '../components/Messages/Modals/EditMessage.vue'
    import { mapActions, mapGetters } from 'vuex'
    import { toRaw } from 'vue'
    import login from '../components/Login.vue'

    export default {
        components: { EditMessage, MessageStatus, DeleteMessage },


        computed: {
            ...mapGetters('messages', ['getMessages'])
        },

        mounted() {
            this.allMessages()
        },

        methods: {
            ...mapActions('messages', ['allMessages', 'getMessageById', 'updateMessage']),

            setDataMessage(id) {
                this.getMessageById(id)
                    .then(data => this.$refs.EditMessage.data = data)
            },

            saveMessage(payload){
                this.updateMessage(payload)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
