import './NoteButtons.scss'

import NoteService from '../../services/NotesService'
import { mapActions } from 'vuex'

export default{
    name: 'NoteButtons',
    props: {
        comp: {
            type: Object
        },
        data: {
            type: Object
        }
    },
    data() {
        return {
            noteButtonList: false,
            noteData: this.data
        }
    },
    watch: { 
        data: function(newVal) { 
        this.noteData = newVal
        }
    },
    methods: {
        ...mapActions(["getAllNotes", "getArchivedNotes", "getTrashedNotes"]),
        returnDeleteButtons(){
            return (this.comp != 'notes' && this.comp!= 'archive')
        },
        async archiveButton(){
            await NoteService.archiveNote(this.noteData)
            await this.getAllNotes()
            await this.getArchivedNotes()
            await this.getTrashedNotes()
        },
        async trashButton(){
            await NoteService.trashNote(this.noteData)
            this.noteButtonList = false
            await this.getAllNotes()
            await this.getArchivedNotes()
            await this.getTrashedNotes()
        },
    }
}