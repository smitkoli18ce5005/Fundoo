
const state = {
    messages: ''
}

const getters = {
    returnMessages: (state) => state.messages
}

const actions = {
    addNotification({commit}, message){
        commit('addMessage', message)
    },
    removeNotification({commit}){
        commit('removeMessage')
    }
}

const mutations = {
    addMessage: (state, message) => (state.messages = message),
    removeMessage: (state) => (state.messages = '')
}

export default{state, getters, actions, mutations}