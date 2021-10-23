import './Archive.scss'

import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'
import SideNavigation from '../../components/SideNavigation/SideNavigation.vue'
import NewNote from '../../components/NewNote/NewNote.vue'
import NotesHolder from '../../components/NotesHolder/NotesHolder.vue'

export default{
    name: 'Archive',
    components:{
        DashboardHeader,
        SideNavigation,
        NewNote,
        NotesHolder
    },
    beforeMount(){
        if(localStorage.getItem('token') == '' || localStorage.getItem('token') == null){
            this.$router.push('/')
        }
    }
}