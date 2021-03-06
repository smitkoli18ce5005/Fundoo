import './SignIn.scss'

import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

import FundooHeader from '@/components/FundooHeader/FundooHeader.vue'
import TextInput from '@/components/Material/TextInput/TextInput.vue'
import BlueLink from '@/components/Material/BlueLink/BlueLink.vue'
import BlueButton from '@/components/Material/BlueButton/BlueButton.vue'

import UserService from '../../services/UserService'

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
            dashboardURL: process.env.VUE_APP_API_DASHBOARD,
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
                    const res = await UserService.signIn(currentData)
                    localStorage.setItem('token', res.data.data.token)
                    this.$router.push({name: "Dashboard"})
                } else {
                    console.log("Validation failed")
                }
            } catch(err) {
                console.log(err)
                this.addNotification("Login failed")
            }
        }
    },
    beforeCreate(){
        if(!localStorage.getItem('token') == false){
            this.$router.push({name: "Dashboard"})
        }
    }
}