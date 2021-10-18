import './DisplayNote.scss'

import NoteButtons from '../NoteButtons/NoteButtons.vue'

import { mapGetters } from 'vuex'

export default{
    name: 'DisplayNote',
    computed: mapGetters(["returnListViewForHeader"]),
    components:{
        NoteButtons
    }
}