import React, { Component } from 'react';
import axios from "axios"
class ForgotBody extends Component {
    constructor(props){
        super(props)
        this.state={
            emailConfirm:""
        }
        this.confirmEmail = this.confirmEmail.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }
    confirmEmail(e){
        this.setState({
            emailConfirm:e.target.value
        })
    }

    sendEmail(){
        let data88 = {
            email:this.state.emailConfirm
        }
        let headers = {
            "Content-Type":"application/json"
        }
        axios({
            method:"post",
            url:"/forgot",
            headers,
            data:data88
        })
        .then(res=>{
            if(res.data.status === "success"){
                document.querySelector("#emc").value = ""
                document.querySelector("#confirmEmailResponse").innerText = res.data.msg
                document.querySelector("#confirmEmailResponse").style.color = "green"
            }else{
                document.querySelector("#confirmEmailResponse").innerText = res.data.msg
                document.querySelector("#confirmEmailResponse").style.color = "red"
            }
        })
    }

    render() { 
        return(
            <React.Fragment>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"500px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"400px"}}></div>
                <div className="container">
                    <h4>Confirm your Email</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix indigo-text darken-4">email</i>
                            <input id="emc" type="email" className="validate" onChange={this.confirmEmail}></input>
                            <label for="emc">Email</label>
                            <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action" onClick={this.sendEmail}>Send
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <h6 id="confirmEmailResponse" className="center-align" style={{fontFamily:"monospace",fontStyle:"italic"}}></h6>
                </div>
                </div>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"630px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"300px"}}></div>
            </React.Fragment>
        ) 
    }
}
 
export default ForgotBody;