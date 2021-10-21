import './DisplayNote.scss'

import NoteButtons from '../NoteButtons/NoteButtons.vue'

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
            noteData: this.data
        } 
    },
    watch: { 
        data: function(newVal) { 
        this.noteData = newVal
        }
    },
    computed: mapGetters(["returnListViewForHeader"])
}