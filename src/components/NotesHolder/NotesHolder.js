import './NotesHolder.scss'

import DisplayNote from '../DisplayNote/DisplayNote.vue'

import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'NotesHolder',
    components:{
        DisplayNote
    },
    props:{
        comp: {
            type: String
        }
    },
    computed: mapGetters(["returnListViewForDisplay", "returnAllNotes", "returnArchivedNotes", "returnTrashedNotes"]),
    methods: {
        ...mapActions(["getAllNotes", "getArchivedNotes", "getTrashedNotes"])
    },
    created(){
        this.getAllNotes(),
        this.getArchivedNotes()
        this.getTrashedNotes()
    }
}