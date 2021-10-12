import './SignIn.scss'

import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

import FundooHeader from '@/components/FundooHeader/FundooHeader.vue'
import TextInput from '@/components/Material/TextInput/TextInput.vue'
import BlueLink from '@/components/Material/BlueLink/BlueLink.vue'
import BlueButton from '@/components/Material/BlueButton/BlueButton.vue'

import axios from 'axios'

import { mapActions } from 'vuex'

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
            learnMoreURL: process.env.VUE_APP_API_LEARN_MORE,
            signUpURL: process.env.VUE_APP_SIGN_UP,
            forgetPasswordURL: process.env.VUE_APP_FORGET_PASSWORD,
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
                required: helpers.withMessage('Enter a password', required)
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
                        email: this.email,
                        password: this.password
                    }
                    const res = await axios.post('/user/login', currentData)
                    console.log(res.data.message)
                } else {
                    console.log("Validation failed")
                }
            } catch(err) {
                console.log(err)
                this.addNotification("Login failed")
            }
        }
    }
}