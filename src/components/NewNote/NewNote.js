import './NewNote.scss'

import NoteButtons from '../NoteButtons/NoteButtons.vue'
import { mapActions } from 'vuex'

import NotesService from '../../services/NotesService'

export default{
    name: 'NewNote',
    data(){
        return{
            newNoteBoolean: true,
            title: '',
            description: ''
        }
    },
    methods: {
        ...mapActions(["addNotification", "updateAllNotes"]),
        async newNoteSwitch(){
            try{
                let data = {
                    title: this.title,
                    description: this.description
                }
                if(data.title.length > 3 && data.description.length > 3){
                    await NotesService.addNote(data)
                    this.updateAllNotes(data)
                } else{
                    //this.addNotification("Failed to add notes")
                }
                this.newNoteBoolean = !this.newNoteBoolean
                this.title = ''
                this.description = ''
                
            } catch(err){
                console.log(err)
                this.addNotification("Failed to add notes")
            }
        }
    },
    components:{
        NoteButtons
    }
} 