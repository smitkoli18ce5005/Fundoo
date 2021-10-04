import axios from "axios"

const state = {
    todooList: []
}

const getters = {
    returnAllPosts: (state) => state.todooList
}

const actions = {
    async getAllPosts({commit}){
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res)
            commit("setAllPosts", res.data)
        } catch (err) {
            console.log(err)
        }
    },
    async addPost({commit}, title){
        try{
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {title})
            console.log(res)
            commit("addNewPost", res.data)
        } catch (err) {
            console.log(err)
        }
    },
    async deleteData({commit}, id){
        try{
            //const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/', {id})
            //console.log(res)
            commit("deletePost", id)
        } catch (err) {
            console.log(err)
        }
    }
}

const mutations = {
    setAllPosts: (state, allPosts) => (state.todooList = allPosts),
    addNewPost: (state, addedPost) => (state.todooList.unshift(addedPost)),
    deletePost: (state, id) => (state.todooList = state.todooList.filter((data) => data.id != id))
}

export default{state, getters, actions, mutations}