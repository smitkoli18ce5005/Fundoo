import './TodooComponent.scss'
import { mapGetters, mapActions } from "vuex";
import InputComponent from './InputComponent/InputComponent.vue';

export default {
    name: 'TodooComponent',
    components:{
        InputComponent
    },
    computed: mapGetters(["returnAllPosts"]),
    methods:{
        ...mapActions(["getAllPosts","deleteData"]),
    },
    created(){
        this.getAllPosts()
    }
}