import './DisplayNote.scss'

import NoteButtons from '../NoteButtons/NoteButtons.vue'

import NoteService from '../../services/NotesService'
import { mapGetters } from 'vuex'

export default{
    name: 'DisplayNote',
    components:{
        NoteButtons
    },
    props:{
        comp: {
            type: String
        },
        data: {
            type: Object
        }
    },
    data() {
        return {
            updateNote: false,
            noteData: this.data
        } 
    },
    watch: { 
        data: function(newVal) { 
        this.noteData = newVal
        }
    },
    computed: mapGetters(["returnListViewForHeader"]),
    methods: {
        async updateNoteFunc(){
            await NoteService.updateNote(this.noteData)
            
            this.updateNote = false
        }
    }
}