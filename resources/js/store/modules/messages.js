export default {
    namespaced: true,

    state() {
        return {
            messages: []
        }
    },

    mutations: {
        addMessages(state, messages) {
            state.messages = messages
        },

        deleteMessage(state, id) {
            state.messages.splice(state.messages.findIndex(key => key.id === id), 1)
        }
    },

    actions: {
        async allMessages({ commit }) {
            const { data } = await axios.get('http://localhost/api/messages')
            commit('addMessages', data)
        },

        async getMessageById(_, id) {
            const { data } = await axios.get(`http://localhost/api/messages/${id}`)
            return data
        },

        async updateMessage(_, { id, name, telephone, message, status }) {
            const { data } = await axios.put(`http://localhost/api/messages/${id}`, {
                name, telephone, message, status
            })

            return data
        },

        async deleteMessage({ commit }, id) {
            await axios.delete((`http://localhost/api/messages/${id}`))
            commit('deleteMessage', id)
        }
    },

    getters: {
        getMessages(state) {
            return state.messages
        }
    }
}
