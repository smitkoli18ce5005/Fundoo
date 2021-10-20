import './Trash.scss'

import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'
import SideNavigation from '../../components/SideNavigation/SideNavigation.vue'
import NewNote from '../../components/NewNote/NewNote.vue'
import NotesHolder from '../../components/NotesHolder/NotesHolder.vue'
import EmptyTrash from '../../components/Material/EmptyTrash/EmptyTrash.vue'

export default{
    name: 'Trash',
    components:{
        DashboardHeader,
        SideNavigation,
        NewNote,
        NotesHolder,
        EmptyTrash
    }
}