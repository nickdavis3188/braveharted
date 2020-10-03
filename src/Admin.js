import React, { Component } from 'react';
import AdminBody from './component/AdminBody';
import FIxbtn from './component/Fixbtn';
import Nav from './component/Nav';
import Postfooter from './component/Postfooter';
class Admin extends Component {
 
    render() { 
        return(
            <React.Fragment>
                <Nav/>
                <AdminBody/>
                <FIxbtn/>
                <Postfooter/>
            </React.Fragment>
        )
    }
}
 
export default Admin;