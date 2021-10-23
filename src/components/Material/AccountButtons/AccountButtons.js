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
            if(this.accountManager){
                this.accountManager = false
            } else {
                const res = await UserService.getUser()
                this.user.firstName = res.data.data.firstName
                this.user.lastName = res.data.data.lastName
                this.user.email = res.data.data.email
                this.accountManager = true
            }
        },
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/')
        }
    }
}