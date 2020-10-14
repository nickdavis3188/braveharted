import React, { Component } from 'react';
import Ad from './component/Ad';
import Eachpost from './component/Eachpost';
import FIxbtn from './component/Fixbtn';
import Nav from './component/Nav';
import Postfooter from './component/Postfooter';
class Allpost extends Component {
  
    render() { 
        return(
            <React.Fragment>
                <Nav/>
                <Ad/>
                <Eachpost/>
                <Ad/>
                <FIxbtn/>
                <Postfooter/>
            </React.Fragment>
        );
    }
}
 
export default Allpost;
