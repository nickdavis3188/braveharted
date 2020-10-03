import React from 'react';
import FIxbtn from './component/Fixbtn';
import ForgotBody from './component/ForgotBody';
import Nav from './component/Nav';
import Postfooter from './component/Postfooter';
function Forgot(props) {
    return(
        <React.Fragment>
            <Nav/>
            <ForgotBody/>
            <FIxbtn/>
            <Postfooter/>
        </React.Fragment>
    ) 
    
}
 
export default Forgot;