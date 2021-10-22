import axios from "axios";

let UserService = {
    baseURL: 'http://localhost:2000',
    async signIn(userData) {
        try{
            return await axios.post( this.baseURL + '/user/login', userData)
        } catch(err){
            console.log(err)
        }
    },
    async signUp(userData) {
        try{
            return await axios.post( this.baseURL + '/user/userSignUp', userData)
        } catch(err){
            console.log(err)
        }
    },
    async forgetPassword(userData) {
        try{
            return await axios.post( this.baseURL + '/user/forgetPassword', userData)
        } catch(err){
            console.log(err)
        }
    },
    async resetPassword(token, userData) {
        try{
            return await axios.patch( this.baseURL + '/user/resetPassword/' + token, userData)
        } catch(err){
            console.log(err)
        }
    },
}

export default UserService