import React,{Component} from 'react';
import axios from "axios"
class NavL extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuthonticated:false,
            isAdmin:false
        }
    }
    componentDidMount(){
        this.getVerify();
    }
    getVerify(){
        let token = localStorage.getItem("LOGIN_TOKEN")
          console.log(token)              
        let data33 = {
            token
        }
        let headers = {
            "Content-Type":"application/json"
        }
        axios({
            method:"post",
            headers,
            url:"/verifyToken",
            data:data33
        })
        .then(res =>{
            if(res.data.status === "success"){
                this.setState({
                    isAuthonticated:true
                })
                if(res.data.userInfo.isAdmin){
                    this.setState({
                        isAdmin:true
                    })
                }
            }
            
        })
    }

    
    
    render() { 
        if (this.state.isAuthonticated && this.state.isAdmin){
            return(
                <React.Fragment>
                    <ul className=" black-text">
                        <li className="black-text"><a href="/" className="black-text"><i className="material-icons large">home</i>HOME</a></li>
                        <li className="black-text"><a href="/post" className="black-text"><i className="material-icons large">chrome_reader_mode</i>POST</a></li>
                        <li className="black-text"><a href="/contact" className="black-text"><i className="material-icons large">contacts</i>CONTACT</a></li>
                        <li className="black-text"><a href="/admin" className="black-text"><i className="material-icons large">airline_seat_recline_normal</i>ADMIN</a></li>
                        <li className="black-text"><a href="/about" className="black-text"><i className="material-icons large" >dashboard</i>ABOUT</a></li>
                    </ul>
                    
                    <a className=" btn white black-text waves-effect waves-light darken-3 right  indigo accent-4 white-text" onClick={
                        ()=>{
                            localStorage.removeItem("LOGIN_TOKEN")
                            this.setState(
                                {
                                isAuthonticated:false
                                }
                            )
                        }
                        
                    }>Sign-Out</a>
                </React.Fragment>
            );
        
        }else if(this.state.isAuthonticated && this.state.isAdmin === false){
            return(
                   
                <React.Fragment>
                    <ul className=" black-text">
                        <li className="black-text"><a href="/" className="black-text"><i className="material-icons large">home</i>HOME</a></li>
                        <li className="black-text"><a href="/post" className="black-text"><i className="material-icons large">chrome_reader_mode</i>POST</a></li>
                        <li className="black-text"><a href="/contact" className="black-text"><i className="material-icons large">contacts</i>CONTACT</a></li>
                        <li className="black-text"><a href="/about" className="black-text"><i className="material-icons large" >dashboard</i>ABOUT</a></li>
            
                    </ul>
                    <a className=" btn white black-text waves-effect waves-light darken-3 right  indigo accent-4 white-text" onClick={
                        ()=>{
                            localStorage.removeItem("LOGIN_TOKEN")
                            this.setState(
                                {
                                isAuthonticated:false
                                }
                            )
                        }
                        
                    }>Sign-Out</a>
                   
                </React.Fragment>
                    
            );       
        }else{
            return(
                   
                <React.Fragment>
                    <ul className=" black-text">
                        <li className="black-text"><a href="/" className="black-text"><i className="material-icons large">home</i>HOME</a></li>
                        <li className="black-text"><a href="/post" className="black-text"><i className="material-icons large">chrome_reader_mode</i>POST</a></li>
                        <li className="black-text"><a href="/contact" className="black-text"><i className="material-icons large">contacts</i>CONTACT</a></li>
                        <li className="black-text"><a href="/about" className="black-text"><i className="material-icons large" >dashboard</i>ABOUT</a></li>
            
                    </ul>
                    <a href="#modal1" className=" pulse btn white black-text waves-effect waves-light darken-3 right modal-trigger indigo accent-4 white-text">Sign-In/Sign-Up</a>
                </React.Fragment>
                    
            ); 
        }
        
    }
}
    
export default NavL;
