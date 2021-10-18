import './NotesHolder.scss'

import DisplayNote from '../DisplayNote/DisplayNote.vue'

import { mapGetters } from 'vuex'

export default{
    name: 'NotesHolder',
    computed: mapGetters(["returnListViewForDisplay"]),
    components:{
        DisplayNote
    }
}