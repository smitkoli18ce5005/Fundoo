import './ForgetPassword.scss'

import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

import FundooHeader from '@/components/FundooHeader/FundooHeader.vue'
import TextInput from '@/components/Material/TextInput/TextInput.vue'
import BlueLink from '@/components/Material/BlueLink/BlueLink.vue'
import BlueButton from '@/components/Material/BlueButton/BlueButton.vue'

import { mapActions } from 'vuex'
import UserService from '../../services/UserService'

export default {
    name: 'ForgetPassword',
    components:{
        FundooHeader,
        TextInput,
        BlueLink,
        BlueButton
    },
    setup(){
        return { v$: useVuelidate() }
    },
    data(){
        return {
            email: ''
        }
    },
    validations(){
        return {
            email: {
                required: helpers.withMessage('Enter an email', required), 
                email:  helpers.withMessage('Please enter a valid email', email)
            }
        }
    },
    methods: {
        ...mapActions(["addNotification"]),
        async submitForm () {
            try {
                this.v$.$validate()
                if(!this.v$.$error) {
                    let currentData = {
                        email: this.email
                    }
                    const res = await UserService.forgetPassword(currentData)
                    console.log(res.data.message)
                } else {
                    console.log("Validation failed")
                }
            } catch(err) {
                console.log(err)
                this.addNotification("Failed to send email")
            }
        }
    }
}