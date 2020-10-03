import React, { Component } from 'react';
import AboutBody from './component/AboutBody';
import FIxbtn from './component/Fixbtn';
import Nav from './component/Nav';
import Postfooter from './component/Postfooter';
class About extends Component {
 
    render() { 
        return (
            <React.Fragment>
                <Nav/>
                <AboutBody/>
                <FIxbtn/>
                <Postfooter/>
            </React.Fragment>

        )
    }
}
 
export default About;