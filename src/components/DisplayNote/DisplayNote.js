import './DisplayNote.scss'

import NoteButtons from '../NoteButtons/NoteButtons.vue'

import { mapGetters } from 'vuex'

export default{
    name: 'DisplayNote',
    components:{
        NoteButtons
    },
    props:{
        data: {
            type: Object
        }
    },
    data() {
        return {
            noteData: this.data
        } 
    },
    computed: mapGetters(["returnListViewForHeader"])
}