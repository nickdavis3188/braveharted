import React,{Component} from "react" 
import log from "../undraw_secure_login_pdn4.svg"
import regg from "../undraw_Terms_re_6ak4.svg"
import axios from "axios"
import NavL from "./NavL"

class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:"",
            userName:"",
            password:"",
            file:null,
            loginE:"",
            loginP:"",
           
        }
        this.submitForm =this.submitForm.bind(this)
        this.takeEmail =this.takeEmail.bind(this)
        this.takeUserName =this.takeUserName.bind(this)
        this.takePassword =this.takePassword.bind(this)
        this.takeFile =this.takeFile.bind(this)
        this.submitE =this.submitE.bind(this)
        this.submitP =this.submitP.bind(this)
        this.login =this.login.bind(this)
    }
    submitForm(){
        const {email,userName,password,file} = this.state
    
        // secont event
        let formData = new FormData()
        formData.append("userName",userName)
        formData.append("password",password)
        formData.append("email",email)
        formData.append("myFile",file)
      
       console.log(formData)
        axios({
            method:"post",
            url:"https://braveharted.herokuapp.com/register",
            data:formData
        })
        .then(res =>{
            if(res.data.status === "error"){
                document.querySelector("#res").style.color = "red"
                document.querySelector("#res").innerText = res.data.msg
            }else{
                document.querySelector("#res").style.color = "green"
                document.querySelector("#res").innerText = res.data.msg
                setTimeout(()=>{
                    window.location.reload()
                },1000)
            }
        })
      
    }
    takeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    takeUserName(e){
        this.setState({
            userName:e.target.value
        })
    }
    takePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    takeFile(e){
        this.setState({
            file:e.target.files[0]
        })
    }
    submitE(e){
        this.setState({
            loginE:e.target.value
        })
    }
    submitP(e){
        this.setState({
            loginP:e.target.value
        })
    }
    login(){
       
        let {loginE,loginP} = this.state
       let data ={
           email:loginE,
           password:loginP
       }
        console.log(loginE,loginP)
        let headers = {
            "Content-Type":"application/json"
        }
        axios({
            method:"post",
            url:"https://braveharted.herokuapp.com/login",
            headers,
            data
        })
        .then(res =>{
            if(res.data.status === "error"){
                document.querySelector("#loginResMsg").style.color = "red"
                document.querySelector("#loginResMsg").innerText = res.data.msg
            }else{
               
                localStorage.setItem("LOGIN_TOKEN",res.data.token)
                document.querySelector("#eL").value = ""
                document.querySelector("#pL").value = ""
                document.querySelector("#loginResMsg").style.color = "green"
                document.querySelector("#loginResMsg").innerText = res.data.msg
                setTimeout(()=>{
                    window.location.reload()
                },1000)
            }
        })
       
    }
    componentDidMount(){
    
    }
    render(){
        
        return(
            <React.Fragment>
                <div style={{width:"100%",height:"auto",backgroundColor:"whitesmoke",position:"fixed",top:0, zIndex:3}}>
                    <nav className="hide-on-med-and-down white">
                        <div className="nav-wrapper white darken-3" >
                            <h3 className=" center-align " style={{color:"black",fontFamily:"monospace"}}>BRAVEHARTED</h3>
                            <div id="navItem" style={{width:"100%",height:"auto",margin:"auto"}}>
                                <NavL/>
                            </div>
                           
                        </div>
                    </nav>
                </div>
                <div id="modal1" className="modal">
                        <div className="modal-content">
                            <div className="row">
                                <div className="col s12">
                                    <ul className="tabs">
                                        <li className="tab col s6"><a href="#login">LOGIN</a></li>
                                        <li className="tab col s6"><a href="#register">REGISTER</a></li>
                                    </ul>
                                </div>
                                <div id="login" className="col s12">
                                <div className="row">
                                    <div className="col s6" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                        <img width="300" src={log} alt="svg_login"></img>
                                    </div>
                                    <div className="col s6">
                                            {/* login */}
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix indigo-text darken-4">email</i>
                                                <input id="eL" type="email" className="validate" onChange={this.submitE}></input>
                                                <label for="eL">Email</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix indigo-text darken-4">phonelink_lock</i>
                                                <input id="pL" type="password" className="validate"  onChange={this.submitP}></input>
                                                <label for="pL">Password</label>
                                            </div>
                                        </div>
                                        <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action" onClick={this.login}>login
                                            <i className="material-icons right">send</i>
                                        </button>
                                        <a href="/forgotPwd"><p>forgot password</p></a>
                                        <h6 id="loginResMsg" className="center-align" style={{fontFamily:"monospace",fontStyle:"italic"}}></h6>
                                        
                                       
                                    </div>
                                </div>
                                </div>
                                {/* register */}
                                <div id="register" className="col s12">
                                    <div className="row">
                                        <div className="col s6"  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <img width="300" src={regg} alt="svg_register"></img>
                                        </div>
                                        <div className="col s6">
                                        <div class="row">
                                            <div className="col s12" >
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                    <i className="material-icons prefix indigo-text accent-4">email</i>
                                                    <input id="icon_prefix1 eR" type="email" name="email" className="validate" onChange={this.takeEmail}></input>
                                                    <label for="icon_prefix1">Email</label>
                                                    </div>
                                                    <div className="input-field col s12">
                                                    <i className="material-icons prefix indigo-text accent-4">account_circle</i>
                                                    <input id="icon_prefix2" type="text" name="userName" className="validate" onChange={this.takeUserName}></input>
                                                    <label for="icon_prefix2">User Name</label>
                                                    </div>
                                                    <div className="input-field col s12">
                                                    <i className="material-icons prefix indigo-text accent-4">phonelink_lock</i>
                                                    <input id="icon_telephone2 pR" type="password" name="password" className="validate" onChange={this.takePassword}></input>
                                                    <label for="icon_telephone2">Password</label>
                                                    </div>
                                                    <div className="file-field input-field">
                                                        <div className="btn white">
                                                            <span><i className="material-icons  indigo-text accent-4 large">insert_photo</i></span>
                                                            <input id="file3" placeholder="profile picture" type="file" name="file" onChange={this.takeFile}></input>
                                                            <label for="file3">Profile picture</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn waves-effect waves-light  indigo accent-4" type="submit" name="action" onClick={this.submitForm}>Register
                                                    <i className="material-icons right">send</i>
                                                </button>
                                                <h6 className="center-align" id="res" style={{fontFamily:"monospace",fontStyle:"italic"}}></h6>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                <div  style={{width:"100%",height:"auto",backgroundColor:"whitesmoke",position:"fixed",top:0, zIndex:3}}>
                    <nav className="hide-on-large-only light" style={{position:"fixed",top:0}} >
                        <div className="nav-wrapper white darken-3" >
                            <a href="#!" className="brand-logo " style={{color:"black",fontFamily:"monospace"}}>BRAVEHARTED</a>
                        </div>
                    </nav>
                </div>
                
            </React.Fragment>
        );
    }
}
export default Nav;