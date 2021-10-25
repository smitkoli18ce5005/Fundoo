import UserService from '../../../services/UserService'
import './AccountButtons.scss'

export default{
    name: 'AccountButtons',
    data() {
        return{
            accountManager: false,
            user: {
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    },
    methods: {
        async profile(){
            this.accountManager = ! this.accountManager
        },
        logout(){
            localStorage.removeItem('token')
            this.$router.push({name: "SignIn"})
        },
        async getUserDetails(){
            const res = await UserService.getUser(localStorage.getItem('token'))
            this.user.firstName = res.data.data.firstName
            this.user.lastName = res.data.data.lastName
            this.user.email = res.data.data.email
        }
    },
    created(){
        this.getUserDetails()
    }
}