import './SignIn.scss'

import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

import FundooHeader from '@/components/FundooHeader/FundooHeader.vue'
import TextInput from '@/components/Material/TextInput/TextInput.vue'
import BlueLink from '@/components/Material/BlueLink/BlueLink.vue'
import BlueButton from '@/components/Material/BlueButton/BlueButton.vue'

import axios from 'axios'

export default {
    name: 'SignIn',
    components: {
        FundooHeader,
        TextInput,
        BlueLink,
        BlueButton
    },
    setup(){
        return { v$: useVuelidate() }
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    validations(){
        return {
            email: {
                required: helpers.withMessage('Enter an email', required), 
                email:  helpers.withMessage('Please enter a valid email', email)
            },
            password: {
                required: helpers.withMessage('Enter a password', required), 
                minLength: helpers.withMessage('Use 8 characters or more for your password', minLength(8))
            }
        }
    },
    methods: {
        async submitForm () {
            try {
                this.v$.$validate()
                if(!this.v$.$error) {
                    let currentData = {
                        email: this.email,
                        password: this.password
                    }
                    const res = await axios.post('http://localhost:2000/user/login', currentData)
                    console.log(res.data)
                } else {
                    console.log("Validation failed")
                }
            } catch(err) {
                console.log(err)
            }
        }
    }
}