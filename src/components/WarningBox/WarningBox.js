import './WarningBox.scss'
import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'WarningBox',
    computed: mapGetters(["returnMessages"]),
    methods: {
        ...mapActions(["removeNotification"]),
    },
    updated(){
        setTimeout(()=>{
            this.removeNotification()
        }, 3000)
    }
}