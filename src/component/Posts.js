import React, { Component } from 'react';
import axios from "axios"
class Posts  extends Component {
   constructor(props){
       super(props)
       this.state={
            allPosts:[]
       }
   }
   componentDidMount(){
       this.getAllPost();
   }
   getAllPost(){
         axios({
                method:"get",
                url:"https://braveharted.herokuapp.com/all"
            })
            .then(res =>{
                if(res.data.status === "success"){
                    if(res.data.item.length > 3){
                        this.setState({
                            allPosts:res.data.item.slice(res.data.item.length-3)
                        })
                    }else{
                        console.log(res.data.item)
                        this.setState({
                            allPosts:res.data.item
                        })
                    }
                    
                }
            })
    }
    render() { 
        return (
            <div className="container">
                <div style={{width:"100%",height:"40px"}} className=" z-depth-4">
                   
                    <div style={{height:"38px",width:"100px",display:"flex",alignItems:"center",justifyContent:"center"}} className="left light-text z-depth-1"><a href="/post">All post</a></div>
                    <div style={{height:"38px",width:"100px",display:"flex",alignItems:"center",justifyContent:"center"}} className="z-depth-3 white black-text waves-effect waves-light darken-3 right">Current post</div>
                    <div className="clearfix"></div>
                </div>
               <br></br>
               {/* hh.slice(0,3) */}
               {/* post */}
             <SubPost post={this.state.allPosts}/>
            </div>
        );
    }
}

function SubPost(props){
    return( props.post.map(item =>(
                <a key={item._id} href={`/${item._id}`}>
                    <div className="row z-depth-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className="col s6" style={{flex:"25px",width:"30%",height:"340px"}}>
                        <div style={{width:"100%",height:"100%"}}>
                            <img className="materialboxed" src={item.file} alt="post" style={{maxWidth:"100%",maxHeight:"100%",display:"block"}}></img>
                        </div>
                    </div>
                    
                    <div className="col s4  " style={{flex:"25px",width:"70%",height:"340px"}}>
                        <div style={{width:"100%",height:"auto",marginTop:"4px"}}>
                            <div className="divider"></div>
                        </div>
                        <div style={{width:"100%",height:"240px"}}>
                            <h5 className="center-align">{item.title}</h5>
                        </div>
                        <div className="divider"></div>
                        
                            <span> {item.comment.length} views  | {item.comment.length} comment </span>
                            
                            <i className="material-icons  right red-text">favorite_border</i>
                    </div>
                </div>
            </a>
        ))
    )
}

export default Posts;