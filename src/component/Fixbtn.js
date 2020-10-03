import React ,{Component} from "react" 
import axios from "axios"
class FIxbtn extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthonticated:false,
            isAdmin:false
        }
    }
    componentDidMount(){
        const token = localStorage.getItem("LOGIN_TOKEN")
                        
        let data33 = {
            token
        }
        let headers = {
            "Content-Type":"application/json"
        }
        axios({
            method:"post",
            headers,
            url:"/verify",
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
    render(){
        if(this.state.isAuthonticated && this.state.isAdmin){
            return(
                <div className="fixed-action-btn hide-on-large-only">
                    <a className="btn-floating red btn-large pulse"><i className="fa fa-caret-up" aria-hidden="true"></i></a>
                    <ul>
                        <li><a className="btn-floating blue btn-large tooltipped" data-position="left" data-tooltip="HOME" href="/"><i className="material-icons large">home</i></a></li>
                        <li><a className="btn-floating pink btn-large tooltipped" data-position="left" data-tooltip="POST" href="/post"><i className="material-icons large">chrome_reader_mode</i></a></li>
                        <li><a className="btn-floating brown btn-large tooltipped" data-position="left" data-tooltip="CONTACT" href="/contact"><i className="material-icons large">contacts</i></a></li>
                        <li><a className="btn-floating brown btn-large tooltipped" data-position="left" data-tooltip="ADMIN" href="/admin"><i className="material-icons large">airline_seat_recline_normal</i></a></li>
                        <li><a className="btn-floating gray btn-large tooltipped" data-position="left" data-tooltip="ABOUT" href="/about"><i className="material-icons large" >dashboard</i></a></li>
                        <li><a className="btn-floating gray btn-large tooltipped " data-position="left" data-tooltip="SIGN_OUT" onClick={
                                ()=>{
                                    localStorage.removeItem("LOGIN_TOKEN")
                                    this.setState(
                                        {
                                        isAuthonticated:false
                                        }
                                    )
                                }
                        }><i className="material-icons large" >https</i></a></li>
                    
                    </ul>
                </div>
            ); 
        }else if(this.state.isAuthonticated && this.state.isAdmin === false){
            return(
                
                <div className="fixed-action-btn hide-on-large-only">
                    <a className="btn-floating red btn-large pulse"><i className="fa fa-caret-up" aria-hidden="true"></i></a>
                    <ul>
                        <li><a className="btn-floating blue btn-large tooltipped" data-position="left" data-tooltip="HOME" href="/"><i className="material-icons large">home</i></a></li>
                        <li><a className="btn-floating pink btn-large tooltipped" data-position="left" data-tooltip="POST" href="/post"><i className="material-icons large">chrome_reader_mode</i></a></li>
                        <li><a className="btn-floating brown btn-large tooltipped" data-position="left" data-tooltip="CONTACT" href="/contact"><i className="material-icons large">contacts</i></a></li>
                        <li><a className="btn-floating gray btn-large tooltipped" data-position="left" data-tooltip="ABOUT" href="/about"><i className="material-icons large" >dashboard</i></a></li>
                        <li><a className="btn-floating gray btn-large tooltipped " data-position="left" data-tooltip="SIGN_OUT" onClick={
                                ()=>{
                                    localStorage.removeItem("LOGIN_TOKEN")
                                    this.setState(
                                        {
                                        isAuthonticated:false
                                        }
                                    )
                                }
                        }><i className="material-icons large" >https</i></a></li>
                   
                       
                    </ul>
                </div>  
            );
        }else{
            return(
         
                <div className="fixed-action-btn hide-on-large-only">
                    <a className="btn-floating red btn-large pulse"><i className="fa fa-caret-up" aria-hidden="true"></i></a>
                    <ul>
                        <li><a className="btn-floating blue btn-large tooltipped" data-position="left" data-tooltip="HOME" href="/"><i className="material-icons large">home</i></a></li>
                        <li><a className="btn-floating pink btn-large tooltipped" data-position="left" data-tooltip="POST" href="/post"><i className="material-icons large">chrome_reader_mode</i></a></li>
                        <li><a className="btn-floating brown btn-large tooltipped" data-position="left" data-tooltip="CONTACT" href="/contact"><i className="material-icons large">contacts</i></a></li>
                        <li><a className="btn-floating gray btn-large tooltipped" data-position="left" data-tooltip="ABOUT" href="/about"><i className="material-icons large" >dashboard</i></a></li>
                        <li><a className="btn-floating gray btn-large tooltipped modal-trigger" data-position="left" data-tooltip="LOGIN/REGISTER" href="#modal1"><i className="material-icons large" >https</i></a></li>
                       
                    </ul>
                </div>  
            );
        }
        
    }
}
export default FIxbtn