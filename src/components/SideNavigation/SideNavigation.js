import './SideNavigation.scss'

import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'SideNavigation',
    computed: mapGetters(["returnSideNav"]),
    methods: {
        ...mapActions(["sideNavSwitch"])
    }
}