import React from 'react';
import RresetPasswordBody from "./component/ResetPasswordBody"
import FIxbtn from './component/Fixbtn';
import ForgotBody from './component/ForgotBody';
import Nav from './component/Nav';
import Postfooter from './component/Postfooter';
function ResetPassword(props) {
    return(
        <React.Fragment>
            <Nav/>
            <RresetPasswordBody/>
            <FIxbtn/>
            <Postfooter/>
        </React.Fragment>
    ) 
    
}
 
export default ResetPassword;