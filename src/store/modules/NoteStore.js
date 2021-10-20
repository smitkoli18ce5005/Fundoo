import axios from "axios"

const state = {
    allNotes: [],
    archivedNotes: [],
    trashedNotes: []
}

const getters = {
    returnAllNotes: (state) => state.allNotes,
    returnArchivedNotes: (state) => state.archivedNotes,
    returnTrashedNotes: (state) => state.trashedNotes
}

const actions = {
    async getAllNotes({commit}){
        try{
            const res = await axios.get('/notes/getAllNotes', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            console.log(res.data.data)
            commit('GET_ALL_NOTES', res.data.data)
        }catch(err){
            console.log(err)
        }
    },
    updateAllNotes({commit}, data){
        commit('UPDATE_ALL_NOTES', data)
    }
}

const mutations = {
    GET_ALL_NOTES: (state, data) => (state.allNotes = data.reverse()),
    UPDATE_ALL_NOTES: (state, data) => (state.allNotes.unshift(data))
}

export default{state, getters, actions, mutations}