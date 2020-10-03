import React, { Component } from 'react';
import mg from "../undraw_Mailbox_re_dvds.svg"
import axios from "axios"
class ContactBody extends Component {
    constructor(props){
        super(props)
        this.state ={
            saveEmail:"",
            saveSubject:"",
            saveText:""
        }
        this.takeEmail2 = this.takeEmail2.bind(this)
        this.takeSubject2 = this.takeSubject2.bind(this)
        this.takeText2 = this.takeText2.bind(this)
        this.submitMail2 = this.submitMail2.bind(this)
    }
    takeEmail2(e){
        this.setState({
            saveEmail:e.target.value
        })
    }
    takeSubject2(e){
        this.setState({
            saveSubject:e.target.value
        })
    }
    takeText2(e){
        this.setState({
            saveText:e.target.value
        })
    }
    submitMail2(){
        const data99 = {
            email:this.state.saveEmail,
            subject:this.state.saveSubject,
            text:this.state.saveText
        }
        let headers = {
            "Content-Type":"application/json"
        }
        axios({
            method:"post",
            url:"/mail",
            headers,
            data:data99
        })
        .then(res =>{
            if(res.data.status === "success"){
                document.querySelector("#email55").value = ""
                document.querySelector("#password55").value = ""
                document.querySelector("#textarea55").value = ""
                let show2 = setTimeout(() =>{
                    document.querySelector("#contactMailResMsg").innerText = res.data.msg
                    document.querySelector("#contactMailResMsg").style.color = "green"
                },1000)

                setTimeout(()=>{
                    clearTimeout(show2)
                },4000)
            }else{
               let show = setTimeout(()=>{
                    document.querySelector("#contactMailResMsg").innerText = res.data.msg
                    document.querySelector("#contactMailResMsg").style.color = "red"
                },1000)
                setTimeout(()=>{
                    document.querySelector("#contactMailResMsg").innerText = ""
                },4000)
               
            }
        })
    }
    render() { 
        return (
            <React.Fragment>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"300px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"70px"}}></div>
                <div className="container-flued">
                    <div className="page-footer white">
                        <div className="z-depth-1 container-flued">
                            <div className="row" >
                                <div className="col s6">
                                    <h3 className="" style={{color:"black",textAlign:"center",fontFamily:"sans-serif"}}>CONTACT</h3>
                                    <img src={mg} alt="brave" width="260"></img>                          
                                    <h5 className="grey-text center-align">Redeemed Christian Church Of God </h5>
                                    <h5 className="grey-text center-align">D'HAT TEENS CHURCH</h5>
                                    <h5 className="grey-text center-align">Rivers state Port Harcourt</h5>
                                    <h5 className="grey-text center-align">Rumodumaya</h5>
                                
                                </div>
                                {/* */}
                                <div className="col s6 offset-s3" >
                                    <div className="row">
                                        <div className="col s12">
                                            <div className="row">
                                            
                                                <div className="input-field col s6">
                                                    <input id="email55" type="email" className="validate" onChange={this.takeEmail2}></input>
                                                    <label for="email55">EMAIL</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s9">
                                                <input id="password55" type="text" className="validate" onChange={this.takeSubject2}></input>
                                                <label for="password55">SUBJECT</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                <textarea id="textarea55" className="materialize-textarea" onChange={this.takeText2}></textarea>
                                                <label for="textarea55">Type your message here</label>
                                                </div>
                                            </div>
                                            <button className="btn waves-effect waves-light indigo accent-4 white-text" type="submit" name="action" onClick={this.submitMail2}>Submit
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                        <h6 id="contactMailResMsg" className="center-align" style={{fontFamily:"monospace",fontStyle:"italic"}}></h6>
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"300px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"70px"}}></div>
            </React.Fragment>

        )
    }
}
 
export default ContactBody;