import './Dashboard.scss'

import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'
import SideNavigation from '../../components/SideNavigation/SideNavigation.vue'
import NewNote from '../../components/NewNote/NewNote.vue'

export default{
    name: 'Dashboard',
    components:{
        DashboardHeader,
        SideNavigation,
        NewNote
    }
}