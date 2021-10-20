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
                await NotesService.addNote(data)
                this.updateAllNotes(data)
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