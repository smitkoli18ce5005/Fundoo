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
            commit('GET_ALL_NOTES', res.data.data)
        }catch(err){
            console.log(err)
        }
    },
    async getArchivedNotes({commit}){
        try{
            const res = await axios.get('/notes/getAllArchivedNotes', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            commit('GET_ARCHIVED_NOTES', res.data.data)
        }catch(err){
            console.log(err)
        }
    },
    async getTrashedNotes({commit}){
        try{
            const res = await axios.get('/notes/getAllTrashedNotes', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            commit('GET_TRASHED_NOTES', res.data.data)
        }catch(err){
            console.log(err)
        }
    },
    updateAllNotes({commit}, data){
        commit('UPDATE_ALL_NOTES', data)
    },
    updateArchivedNotes({commit}, data){
        commit('UPDATE_ARCHIVED_NOTES', data)
    }
}

const mutations = {
    GET_ALL_NOTES: (state, data) => (state.allNotes = data.reverse()),
    GET_ARCHIVED_NOTES: (state, data) => (state.archivedNotes = data),
    GET_TRASHED_NOTES: (state, data) => (state.trashedNotes = data),

    
    UPDATE_ALL_NOTES: (state, data) => (state.allNotes.unshift(data)),
    UPDATE_ARCHIVED_NOTES: (state, data) => (state.archivedNotes = state.archivedNotes.filter((note) => note._id != data._id))
}

export default{state, getters, actions, mutations}