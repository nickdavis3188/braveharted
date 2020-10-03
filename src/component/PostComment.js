import React,{Component} from 'react';
import axios from "axios"
class PostComment extends Component{
    constructor(props){
        super(props)
        this.state={
            inputedComment: ""
        }
        this.takeComment = this.takeComment.bind(this)
    }

    takeComment(e){
        this.setState({
            inputedComment:e.target.value
        })
    }
    render(){
        return(
            <div className="z-depth-2" style={{width:"100%",maxHeight:"800px",overflowY:"auto"}}>
                <h5 className="center-align" style={{fontFamily:"monospace"}}>COMMENT</h5>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                            <i class="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" class="materialize-textarea" onChange={this.takeComment}></textarea>
                            <label for="icon_prefix2">Comment</label>
                                <ConfirmBtn confirmU={this.props.confirm} text={this.state.inputedComment} postId={window.location.pathname.slice(1)}/>
                            </div>
                        </div>
                    </form>
                </div>
                <h5 style={{fontWeight:"bold",marginLeft:"20px"}}>All comments</h5>
                <div className="divider"></div>
                <div style={{maxHeight:"500px",maxWidth:"50%",backgroundColor:"whitesmoke",marginLeft:"20px",}}>
                    {/* comments */}
                    <ul>
                        <JustComment userC={this.props.comment} />
                    </ul>
                </div>
            </div>
        );
    }
   
  
}

function JustComment(props){
   return( props.userC.map(item =>(
           <Surecomment main={item.comment}/>
        ))
   );
}

function Surecomment(props){
    if(props.main.length < 1){
        return(<h5>No comment</h5>)
    }else{
        return(
            props.main.map(comm =>(
                <li key={comm._id} className="z-depth-1 white" style={{borderRadius:"0 5px 5px 0"}}>
                    <img className=" left circle" width="70" src={comm.img} alt="users"></img>
                    <span >{comm.name}</span>
                    <div className="clearFix"></div>
                    <hr style={{fontWeight:"lighter"}}></hr>
                    <h6>{comm.body}</h6>
                </li>
            ))
            
        )
    }
    
}


function ConfirmBtn(props){
    if(props.confirmU === ""){
        return(
            <button className="btn waves-effect waves-light right" type="submit" name="action">pls login to comment on the post</button>
        );  
    }else{
        return(
            <button className="btn waves-effect waves-light right" type="submit" name="action" onClick={
                ()=>{
                    let {userName,image} = props.confirmU;
                    let {text} = props;
                    const data44 = {
                        postId:props.postId,
                        userName,
                        image,
                        text
                    }
                    let headers = {
                        "Content-Type":"application/json"
                    }
                    axios({
                        method:"post",
                        headers,
                        url:"https://braveharted.herokuapp.com/insertComment",
                        data:data44
                    })
                    .then(res=>{
                        if(res.data.status === "success"){
                            window.location.reload()
                        }
                    })

                }
            }>Submit
                <i className="material-icons right">send</i>
            </button>
        );
    }
    
}
export default PostComment