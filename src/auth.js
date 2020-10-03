import axios from "axios"
import url from "./config"
class Auth{
    constructor(){
        this.isAuthenticated = false
    }
   sureIsAuthenticated(){
        return this.isAuthenticated
    }
    logedIn(cb){
        cb()
    }
    logOut(){
        const token = localStorage.getItem("TOKEN_KEY")
        if(token){
            let data34 = {
                token
            }
            let headers = {
                "Content-Type":"application/json"
            }
            axios({
                method:"post",
                    url:`${url}verifyToken`,
                    headers,
                    data:data34
            })
            .then(res =>{
                if(res.data.status === "success"){
                    localStorage.removeItem("TOKEN_KEY")
                    this.isAuthenticated = false
                }else{
                    this.isAuthenticated = true
                }
            })
           
       }else{
           this.isAuthenticated = false
       }
      
    }
}
export default new Auth()