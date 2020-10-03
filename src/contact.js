import React, { Component } from 'react';
import ContactBody from './component/contactBody';
import FIxbtn from './component/Fixbtn';
import Nav from './component/Nav';
import Postfooter from './component/Postfooter';
class Contact extends Component {

    render() { 
        return (
            <React.Fragment>
                <Nav/>
                <ContactBody/>
                <FIxbtn/>
                <Postfooter/>
            </React.Fragment>
        )
    }
}
 
export default Contact;