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
            return res
        } catch(err){
            console.log(err)
        }
    }
}

export default NoteService 