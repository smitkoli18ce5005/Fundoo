import './NoteButtons.scss'

import NoteService from '../../services/NotesService'
import { mapActions } from 'vuex'

export default{
    name: 'NoteButtons',
    props: {
        data: {
            type: Object
        }
    },
    data() {
        return {
            noteData: this.data
        }
    },
    watch: { 
        data: function(newVal) { 
        this.noteData = newVal
        }
    },
    methods: {
        ...mapActions(["getAllNotes", "getArchivedNotes"]),
        async archiveButton(){
            await NoteService.archiveNote(this.noteData)
            await this.getAllNotes()
            await this.getArchivedNotes()
        }
    }
}