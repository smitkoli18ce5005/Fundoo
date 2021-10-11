import './ResetPassword.scss'

import useVuelidate from '@vuelidate/core'
import { required, minLength, sameAs, helpers } from '@vuelidate/validators'

import FundooHeader from '@/components/FundooHeader/FundooHeader.vue'
import TextInput from '@/components/Material/TextInput/TextInput.vue'
import BlueLink from '@/components/Material/BlueLink/BlueLink.vue'
import BlueButton from '@/components/Material/BlueButton/BlueButton.vue'

import axios from 'axios'

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
            showPassword: true,
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
        async submitForm () {
            try {
                this.v$.$validate()
                if(!this.v$.$error) {
                    let currentData = {
                        password: this.password
                    }
                    var url = window.location.href
                    const access_token = url.split("/").pop();
                    const res = await axios.patch('/user/resetPassword/' +access_token, currentData)
                    console.log(res.data.message)
                } else {
                    console.log("Validation failed")
                }
            } catch(err) {
                console.log(err)
            }
        }
    }
}