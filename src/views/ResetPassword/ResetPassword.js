import './ResetPassword.scss'

import useVuelidate from '@vuelidate/core'
import { required, minLength, sameAs, helpers } from '@vuelidate/validators'

import FundooHeader from '@/components/FundooHeader/FundooHeader.vue'
import TextInput from '@/components/Material/TextInput/TextInput.vue'
import BlueLink from '@/components/Material/BlueLink/BlueLink.vue'
import BlueButton from '@/components/Material/BlueButton/BlueButton.vue'

import UserService from '../../services/UserService'

import { mapActions } from 'vuex'

export default {
    name: 'ResetPassword',
    components:{
        FundooHeader,
        TextInput,
        BlueLink,
        BlueButton,
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            forgetPasswordURL: process.env.VUE_APP_FORGET_PASSWORD,
            showPassword: false,
            password: '',
            confirm: ''
        } 
    },
    validations () {
        return {
            password: { 
                required: helpers.withMessage('Enter a password', required), 
                minLength: helpers.withMessage('Use 8 characters or more for your password', minLength(8))
            },
            confirm: { 
                required: helpers.withMessage('Confirm your password', required), 
                sameAs: helpers.withMessage('Those passwords didn’t match. Try again.', sameAs(this.password)) 
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
                        password: this.password
                    }
                    const res = await UserService.resetPassword(this.$route.params.token, currentData)
                    console.log(res.data.message)
                } else {
                    console.log("Validation failed")
                }
            } catch(err) {
                console.log(err)
                this.addNotification("Failed to reset password")
            }
        }
    },
    beforeMount(){
        if(localStorage.getItem('token') != '' || localStorage.getItem('token') != null){
            this.$router.push('/Dashboard')
        }
    }
}