import React, { Component } from 'react';
import axios from "axios"
class ResetPasswordBody extends Component {
    constructor(props){
        super(props)
        this.state={
            password:"",
            passwordConfirm:""
        }
        this.confirmPassword = this.confirmPassword.bind(this)
        this.password = this.password.bind(this)
    }
    password(e){
        this.setState({
            password:e.target.value
        })
    }
    confirmPassword(e){
        this.setState({
            passwordConfirm:e.target.value
        })
    }

   
    render() { 
        return(
            <React.Fragment>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"500px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"400px"}}></div>
                <div className="container">
                    <h4>Reset Password</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix indigo-text darken-4">phonelink_lock</i>
                            <input id="ppass" type="password" className="validate" onChange={this.password}></input>
                            <label for="ppass">password</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix indigo-text darken-4">phonelink_lock</i>
                            <input id="passcon" type="password" className="validate" onChange={this.confirmPassword}></input>
                            <label for="passcon">confirm password</label>
                        </div>
                        <PasswordButtonChaeck password={this.state.password} confirmPassword={this.state.passwordConfirm} token={window.location.hash.slice(1)}/>
                        <h6 id="passwordResetResponse" className="center-align" style={{fontFamily:"monospace",fontStyle:"italic"}}></h6>
                </div>
                </div>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"630px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"300px"}}></div>
            </React.Fragment>
        ) 
    }
}
 
function PasswordButtonChaeck(props){
    let {password,confirmPassword} = props
    if(confirmPassword !== password){
        return(
            <button className="btn waves-effect waves-light indigo darken-4 disabled" type="submit" name="action" >Send
                <i className="material-icons right">send</i>
            </button>
        )
    }else{
        return(
            <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action" onClick={()=>{
                let data99 = {
                    pasword:password
                }
                let headers = {
                    "Content-Type":"application/json"
                }
                axios({
                    method:"post",
                    url:`https://braveblog2.herokuapp.com/resetPWD/${props.token}`,
                    headers,
                    data:data99
                })
                .then(res=>{
                    if(res.data.status === "success"){
                        document.querySelector("#pass").value = ""
                        document.querySelector("#passcon").value = ""
                        document.querySelector("#passwordResetResponse").innerText = res.data.msg
                        document.querySelector("#passwordResetResponse").style.color = "green"
                    }else{
                        document.querySelector("#passwordResetResponse").innerText = res.data.msg
                        document.querySelector("#passwordResetResponse").style.color = "red"
                    }
                })
            }}>Send
                <i className="material-icons right">send</i>
            </button>
        )
    }
}
export default ResetPasswordBody;
