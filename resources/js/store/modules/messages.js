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
        }
    },

    actions: {
        async allMessages({ commit }) {
            const { data } = await axios.get('http://localhost/api/messages')
            commit('addMessages', data)
        }
    },

    getters: {
        getMessages(state) {
            return state.messages
        }
    }
}
