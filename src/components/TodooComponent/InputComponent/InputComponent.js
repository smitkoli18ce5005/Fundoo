import './InputComponent.scss'
import { mapActions } from "vuex"

export default {
    name: 'InputComponent',
    data(){
        return{
            title: ''
        }
    },
    methods:{
        ...mapActions(["addPost"]),
        addData(){
            this.addPost(this.title) 
        }
    }    
}