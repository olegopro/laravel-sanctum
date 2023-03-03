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
            <table class="table table-hover" v-if="getAccounts.length">
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
                    <tr v-for="account in getAccounts" :key="account.account_id">
                        <th scope="row">{{ account.account_id }}</th>
                        <td>{{ account.screen_name }}</td>
                        <td>{{ account.phone }}</td>
                        <td>{{ account.date }}</td>
                        <td>{{ account.message }}</td>
                        <td>
                            <MessageStatus type="processed" />
                        </td>
                        <td>
                            <button
                                class="btn btn-primary me-2 button-style"
                                data-bs-target="#editMessage"
                                data-bs-toggle="modal"
                                type="button"
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
        <EditMessage />
    </Teleport>

</template>

<script>
    import MessageStatus from '../components/Messages/MessageStatus.vue'
    import DeleteMessage from '../components/Messages/Modals/DeleteMessage.vue'
    import EditMessage from '../components/Messages/Modals/EditMessage.vue'

    export default {
        components: { EditMessage, MessageStatus, DeleteMessage },

        data() {
            return {
                getAccounts: [
                    {
                        account_id: 1,
                        screen_name: 'Маша',
                        phone: '+790121212',
                        date: '12.12.12',
                        status: 'В ожидании',
                        message: 'Может показаться странным, но герцог графства коронован'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
