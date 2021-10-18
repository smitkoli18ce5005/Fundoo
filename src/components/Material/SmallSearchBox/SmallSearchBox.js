import './SmallSearchBox.scss'

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SmallSearchBox',
    computed: mapGetters(["returnSmallSearchBox"]),
    methods: {
        ...mapActions(["smallSearchBoxSwitch"])
    }
}