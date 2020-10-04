import React, { Component } from 'react';
import axios from "axios"
class Eachpost extends Component {
    constructor(props){
        super(props)
        this.state = {
            allPost:[]
        }
    }
    componentDidMount(){
        axios({
            method:"get",
            url:"https://braveharted.herokuapp.com/allPost"
        })
        .then(res =>{
            if(res.data.status === "success"){
                this.setState({
                    allPost:res.data.item
                })
            }
        })
    }
    render() { 
        return (
            <React.Fragment>

                <div className="hide-on-med-and-down" style={{width:"100%",height:"240px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"70px"}}></div>
                <div className="container">
                    <h3 style={{marginLeft:"30px",fontFamily:"monospace"}}>All Post</h3>
                    <br></br>
                    {/* post */}
                    <LoopedPost post={this.state.allPost}/>
                
                </div>
            </React.Fragment>
        )
    }
}
 
function LoopedPost(props){
    return(
        props.post.map(item =>(
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
                        <h5 className="center-align trunkate">{item.title}</h5>
                        </div>
                        <div className="divider"></div>
                        
                            <span>{item.comment.length} views  | {item.comment.length} comment </span>
                            
                            <i className="material-icons  right red-text">favorite_border</i>
                    </div>
                </div>
            </a>
        ))
    );
}
export default Eachpost;
