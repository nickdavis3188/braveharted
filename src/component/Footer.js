import React,{Component} from "react"
import img from "../redeemed.jpg"
import axios from "axios"

class Footer extends Component{
    constructor(props){
        super(props)
        this.state ={
            saveEmail:"",
            saveSubject:"",
            saveText:""
        }
        this.takeEmail = this.takeEmail.bind(this)
        this.takeSubject = this.takeSubject.bind(this)
        this.takeText = this.takeText.bind(this)
        this.submitMail = this.submitMail.bind(this)
    }
    takeEmail(e){
        this.setState({
            saveEmail:e.target.value
        })
    }
    takeSubject(e){
        this.setState({
            saveSubject:e.target.value
        })
    }
    takeText(e){
        this.setState({
            saveText:e.target.value
        })
    }
    submitMail(){
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
            url:"https://braveharted.herokuapp.com/mail",
            headers,
            data:data99
        })
        .then(res =>{
            if(res.data.status === "success"){
                document.querySelector("#email44").value = ""
                document.querySelector("#password44").value = ""
                document.querySelector("#textarea44").value = ""
                let show2 = setTimeout(() =>{
                    document.querySelector("#mailResMsg").innerText = res.data.msg
                    document.querySelector("#mailResMsg").style.color = "green"
                },1000)

                setTimeout(()=>{
                    clearTimeout(show2)
                },4000)
            }else{
               let show = setTimeout(()=>{
                    document.querySelector("#mailResMsg").innerText = res.data.msg
                    document.querySelector("#mailResMsg").style.color = "red"
                },1000)
                setTimeout(()=>{
                    document.querySelector("#mailResMsg").innerText = ""
                  
                },4000)
               
            }
        })
    }
    render(){
        return(
            <footer className="page-footer white">
                <div className="z-depth-1 container-flued" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className="row" style={{flex:"25px"}}>
                        <div className="col l6 s12">
                        <h3 className="" style={{color:"black",textAlign:"center",fontFamily:"sans-serif"}}>CONTACT</h3>
                        <img className=" circle center" width="300" src={img} alt="redeem-logo" ></img>
                        <h6 className="grey-text center-align">Redeemed Christian Church Of God </h6>
                        <h6 className="grey-text center-align">D'HAT TEENS CHURCH</h6>
                        <h6 className="grey-text center-align">Rivers state Port Harcourt</h6>
                        <h6 className="grey-text center-align">Rumodumaya</h6>
                     
                    </div>
                    {/* */}
                    <div className="col l4 offset-l2 s12" style={{flex:"25px"}}>
                        <div className="row">
                            <div className="col s12">
                                <div className="row">
                                 
                                    <div className="input-field col s6">
                                        <input id="email44" type="email" className="validate" onChange={this.takeEmail}></input>
                                        <label for="email44">EMAIL</label>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="input-field col s9">
                                    <input id="password44" type="text" className="validate" onChange={this.takeSubject}></input>
                                    <label for="password44">SUBJECT</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <textarea id="textarea44" className="materialize-textarea" onChange={this.takeText}></textarea>
                                    <label for="textarea44">Type your message here</label>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-light black" type="submit" name="action" onClick={this.submitMail}>Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                            <h6 id="mailResMsg" className="center-align" style={{fontFamily:"monospace",fontStyle:"italic"}}></h6>
                        </div>       
                    </div>
                </div>
            </div>
                <div className="footer-copyright ">
                    <div className="container dark center-align z-depth-1"  style={{color:"black"}}>
                        © 2020 by BRAVEHARTED powerd by D'HAT TEENS CHURCH
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
          </footer>
        );
    }
}
export default Footer