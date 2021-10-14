import './NewNote.scss'

import NoteButtons from '../NoteButtons/NoteButtons.vue'

export default{
    name: 'NewNote',
    data(){
        return{
            newNoteBoolean: true
        }
    },
    methods: {
        newNoteSwitch(){
            this.newNoteBoolean = !this.newNoteBoolean
        }
    },
    components:{
        NoteButtons
    }
} 