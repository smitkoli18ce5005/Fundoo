import './TextInput.scss'
export default{
    name: 'TextInput',
    props: {
        inputType: {
            type: String
        },
        id: {
            type: String
        },
        placeHolder: {
            type: String
        },
        error: {
            type: Boolean
        },
        data: {
            type: String
        }
    },
    data(){
        return{
            inputData: this.data
        }
    }
}