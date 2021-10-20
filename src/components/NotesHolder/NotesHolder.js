import './NotesHolder.scss'

import DisplayNote from '../DisplayNote/DisplayNote.vue'

import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'NotesHolder',
    computed: mapGetters(["returnListViewForDisplay", "returnAllNotes"]),
    components:{
        DisplayNote
    },
    methods: {
        ...mapActions(["getAllNotes"])
    },
    created(){
        this.getAllNotes()
    }
}