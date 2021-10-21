import './NewNote.scss'

import NoteButtons from '../NoteButtons/NoteButtons.vue'
import { mapActions } from 'vuex'

import NotesService from '../../services/NotesService'

export default{
    name: 'NewNote',
    data(){
        return{
            newNoteBoolean: true,
            noteData:{  
                title: '',
                description: '',
                color: '#ffffff'
            },
        }
    },
    methods: {
        ...mapActions(["addNotification", "updateAllNotes"]),
        async newNoteSwitch(){
            try{
                let note = {
                    title: this.noteData.title,
                    description: this.noteData.description,
                    color: this.noteData.color
                }
                if(note.title.length > 3 && note.description.length > 3){
                    await NotesService.addNote(note)
                    this.updateAllNotes(note)
                } else{
                    //this.addNotification("Failed to add notes")
                }
                this.newNoteBoolean = !this.newNoteBoolean
                this.noteData.title = ''
                this.noteData.description = ''
                this.noteData.color = '#ffffff'
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