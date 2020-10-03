import React, { Component } from 'react';
import axios from "axios"
class AdminBody extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:"",
            body:"",
            files:null
        }

        this.takeTitle = this.takeTitle.bind(this)
        this.takeBody = this.takeBody.bind(this)
        this.takeFiles = this.takeFiles.bind(this)
        this.sendPost = this.sendPost.bind(this)
    }
    sendPost(){
        const {title,body,files} =  this.state
        const formData = new FormData()
        formData.append("title",title)
        formData.append("body",body)
        formData.append("myFiles",files)
        axios({
            method:"post",
            url:" https://braveharted.herokuapp.com/admini",
            data:formData
        })
        .then(res =>{
            if(res.data.status == "error"){
                document.querySelector("#respons").style.color = "red"
                document.querySelector("#respons").innerText = res.data.msg
            }else{ 
                document.querySelector("#respons").style.color = "green"
                document.querySelector("#respons").innerText = res.data.msg
            }
        })
    }

    takeTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    takeBody(e){
        this.setState({
            body:e.target.value
        })
    }
    takeFiles(e){
        this.setState({
            files:e.target.files[0]
        })
    }
    render() { 
        return(
            <React.Fragment>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"300px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"300px"}}></div>
                <div className="container">
                    <h2 className="center-align">BRAVEHARTED POST UPLOAD</h2>
                    <br></br>
                    <h6 className="center-align">Note this page is only for the admin and it's only for post upload</h6>
                <div className="row center">
                    <h5>TITLE</h5>
                    <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" className="materialize-textarea" onChange={this.takeTitle}></textarea>
                            <label for="icon_prefix2">TITLE</label>
                        </div>
                        <h5>BODY</h5>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" className="materialize-textarea" onChange={this.takeBody}></textarea>
                            <label for="icon_prefix2">BODY</label>
                        </div>
                        <h5>IMAGE only</h5>
                        <div className="file-field input-field col s12">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" onChange={this.takeFiles}></input>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload one or more Video/Image"></input>
                            </div>
                        </div>
                        
                        <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action" onClick={this.sendPost}>Send post<i className="material-icons right">send</i></button>
                        
                        <h6 className="center-align" id="respons" style={{fontFamily:"monospace",fontStyle:"italic"}}></h6>
                    </div>
                    
                    </div>
                </div>
        
                </div>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"440px"}}></div>

                <div className="hide-on-large-only" style={{width:"100%",height:"100px"}}></div>
            </React.Fragment>
        ) 
    }
}
 
export default AdminBody;