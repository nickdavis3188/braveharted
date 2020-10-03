import React, { Component } from 'react';
import Eachpost from './component/Eachpost';
import FIxbtn from './component/Fixbtn';
import Nav from './component/Nav';
import Postfooter from './component/Postfooter';
class Allpost extends Component {
  
    render() { 
        return(
            <React.Fragment>
                <Nav/>
                <Eachpost/>
                <FIxbtn/>
                <Postfooter/>
            </React.Fragment>
        );
    }
}
 
export default Allpost;