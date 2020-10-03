import React, { Component } from 'react';
import Nav from './Nav';
import Postfooter from './Postfooter';
import FIxbtn from './Fixbtn';
import img from "../img/slide3.webp"
import axios from "axios"
import PostComment from './PostComment';
import "../App.css"
// mongodb+srv://NickDavis:davis3188@cluster0.f90pa.mongodb.net/NickDavis?retryWrites=true&w=majority
class Mainpost extends Component {
    constructor(props){
        super(props)
        this.state ={
            subPost:[],
            forComment:[],
            confirmLog:[]
        }
    }
    componentDidMount(){
        this.getMainPost();
        this.getVerificationn();
        this.getAllPostt();
    }
    getMainPost(){
            let pathN = window.location.hash.slice(1)
            console.log(pathN)
        axios({
            method:"get",
            url:` https://braveharted.herokuapp.com/post/${pathN}`
        })
        .then(ress =>{
            if(ress.data.status === "success"){
                this.setState({
                    forComment:ress.data.mainPost
                })
            }else{
                this.setState({
                    forComment:[]
                })
            }
        })
    }
    

    getVerificationn(){
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
            url:"https://braveharted.herokuapp.com/verifyLog",
            data:data33
        })
        .then(res =>{
            if(res.data.status === "success"){
                this.setState({
                    confirmLog:res.data.userInfo
                })
            }else{
                this.setState({
                    confirmLog:""
                })
            }
        }) 
    }
    //


    getAllPostt(){
            axios({
            method:"get",
            url:"https://braveharted.herokuapp.com/mysinglepost"
        })
        .then(res =>{
            if(res.data.status === "success"){
                if(res.data.item.length > 3){
                    this.setState({
                        subPost:res.data.item.slice(res.data.item.length-3)
                    })
                }else{
                    console.log(res.data.item)
                    this.setState({
                        subPost:res.data.item
                    })
                }
                
            }
        })
    }
    // 
    
    
    render() { 
        return (
            <React.Fragment>
                <Nav/>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"240px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"70px"}}></div>
                <div className="container">
                    <div  >
                        <i style={{cursor:"pointer"}} class="fa fa-arrow-left fa-2x" aria-hidden="true" onClick={()=> window.history.back()}></i>
                    </div>
                    <br></br>
                    <Realpost post={this.state.forComment}/>
                    <div className="divider"></div>
                    <h4 className="center-align">More stories</h4>
                    <div style={{
                    display:"flex",
                    justifyContent:"center",
                    flexWrap:"wrap"
                    }}>
                        <Carosel all={this.state.subPost}/>
                    </div>
                    <div style={{width:"100%",height:"140px"}}></div>
                    <PostComment confirm={this.state.confirmLog} comment={this.state.forComment}/>
                </div>
                <FIxbtn/>
                <div style={{width:"100%",height:"240px"}}></div>
                <Postfooter/>
            </React.Fragment>
        );
    }
}

function Realpost(props){
    return(
        props.post.map(item =>(
            <div id="hh" className="z-depth-1" style={{maxWidth:"90%",maxHeight:"1000px",margin:"auto", overflowY:"auto"}}>
            <div className="z-depth-1">
                <p></p>
            </div>
            <h4 id="title" className="center-align" style={{fontFamily:"Bebas Neue, cursive"}}>{item.title}</h4>
            <br></br>
            <hr></hr>
            <img id="img" src={item.file} className=" center-align" alt="post" style={{maxWidth:"100%",maxHeight:"100%",display:"block",margin:"auto"}} ></img>
          
            <h5 id="body"  className="center-align" style={{fontFamily:"Sansita Swashed, cursive",lineHeight:"42px",wordSpacing:"10px"}}>{item.body} </h5>
        </div>
        ))
    )
}
 

// more post

function Carosel(props){
    return(
        props.all.map(post=>(
            <div className="card22" id="fold55">
                <img src={post.file} alt="post" style={{width:"100%"}} id="myim"></img>
                <div className="container22">
                    <a href={`https://braveharted.netlify.app/realpost#${post._id}`}><h4><b>{post.title}</b></h4></a>
                </div>
            </div> 
         
           
        ))
    );
}
export default Mainpost;