import './SignUp.scss'

import useVuelidate from '@vuelidate/core'
import { required, alpha, email, minLength, sameAs, helpers } from '@vuelidate/validators'

import FundooLogo from '../../components/Material/FundooLogo/FundooLogo.vue'
import TextInput from '@/components/Material/TextInput/TextInput.vue'
import BlueLink from '@/components/Material/BlueLink/BlueLink.vue'
import BlueButton from '@/components/Material/BlueButton/BlueButton.vue'

export default{
    name: 'SignUp',
    components: {
        FundooLogo,
        TextInput,
        BlueLink,
        BlueButton
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
        return {
            showPassword: false,
            name: {
                firstName: '',
                lastName: ''
            },
            email: '',
            password: {
                password: '',
                confirmPassword: ''
            }
        }
    },
    validations () {
        return {
            name: {
                firstName: { 
                    required: helpers.withMessage('Enter First Name', required), 
                    alpha: helpers.withMessage('First name should have only alphabet characters', alpha), 
                    minLength: helpers.withMessage('First Name should have atleast 3 characters', minLength(3))
                },
                lastName: { 
                    required: helpers.withMessage('Enter Last Name', required), 
                    alpha: helpers.withMessage('Last name should have only alphabet characters', alpha), 
                    minLength: helpers.withMessage('Last Name should have atleast 3 characters', minLength(3))
                }
            },
            email: { 
                required: helpers.withMessage('Enter an email', required), 
                email:  helpers.withMessage('Please enter a valid email', email)
            },
            password: {
                password: { 
                    required: helpers.withMessage('Enter a password', required), 
                    minLength: helpers.withMessage('Use 8 characters or more for your password', minLength(8))
                },
                confirmPassword: { 
                    required: helpers.withMessage('Confirm your password', required), 
                    sameAs: helpers.withMessage('Those passwords didn’t match. Try again.', sameAs(this.password.password)) 
                }
            }
        }
    },
    methods: {
        submitForm () {
            this.v$.$validate()
            if(!this.v$.$error) {
                alert("success")
            } else {
                alert("Failed")
            }
        }
    }
}