import './ActionButtons.scss'

import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'ActionButtons',
    computed: mapGetters(["returnSmallSearchBox"]),
    methods: {
        ...mapActions(["smallSearchBoxSwitch", "listViewSwitch"])
    }
}