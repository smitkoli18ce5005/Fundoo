import axios from "axios"

let NoteService = {
    baseURL: 'http://localhost:2000',
    header: {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    },

    async addNote(data){
        try{
            const res = await axios.post(this.baseURL + '/notes/addNotes', data, this.header)
            console.log(res.data.message)
        } catch(err){
            console.log(err)
        }
    },

    async archiveNote(data){
        try{
            const res = await axios.patch(this.baseURL + '/notes/archiveNote/' +data._id, this.header)
            console.log(res.data.message)
        } catch(err){
            console.log(err)
        }
    },

    async trashNote(data){
        try{
            const res = await axios.delete(this.baseURL + '/notes/deleteNote/' +data._id, this.header)
            console.log(res.data.message)
        } catch(err){
            console.log(err)
        }
    },

    async updateNote(data){
        try{
            const res = await axios.patch(this.baseURL + '/notes/updateNote/' +data._id, data, this.header)
            console.log(res.data.message)
        } catch(err){
            console.log(err)
        }
    }
}

export default NoteService 