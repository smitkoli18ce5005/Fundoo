import './DashboardHeader.scss'

import KeepLogo from '../Material/KeepLogo/KeepLogo.vue'
import SearchBox from '../Material/SearchBox/SearchBox.vue'
import ActionButtons from '../Material/ActionButtons/ActionButtons.vue'
import AccountButtons from '../Material/AccountButtons/AccountButtons.vue'
import SmallSearchBox from '../Material/SmallSearchBox/SmallSearchBox.vue'

import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'DashboardHeader',
    computed: mapGetters(["returnSmallSearchBox"]),
    methods: {
        ...mapActions(["smallSearchBoxSwitch"])
    },
    components:{
        KeepLogo,
        SearchBox,
        ActionButtons,
        AccountButtons,
        SmallSearchBox
    }
}