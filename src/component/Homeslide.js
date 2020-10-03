import React, { Component } from 'react';
import slide1 from "../img/slide1.jpeg"
import slide2 from "../img/slide2.jpeg"
import slide3 from "../img/slide3.webp"
import slide4 from "../img/slide4.jpeg"
import slide5 from "../img/slide5.jpeg"

class Homeslide extends Component {
   
    render() { 
        return (
            <React.Fragment>
                <div className="hide-on-med-and-down" style={{width:"100%",height:"200px"}}></div>
                <div className="hide-on-large-only" style={{width:"100%",height:"70px"}}></div>
               
            <div className="slider large">
                    <ul className="slides">
                        <li >
                            <img  src={slide1} alt="slide1"></img>
                            <div className="caption center-align">
                                <h3>BRAVEHARTED</h3>
                                <h5 className="light gray-text text-lighten-3">BOLDEST OF THEM ALL <i className="material-icons large">mood</i> ....</h5>
                            </div>
                        </li>
                        <li >
                            <img  src={slide2} alt="slide1"></img>
                            <div className="caption left-align">
                                <h3>BRAVEHARTED</h3>
                                <h5 className="light gray-text text-lighten-3">BOLDEST OF THEM ALL <i className="material-icons large">mood</i> ....</h5>
                            </div>
                        </li>
                        <li >
                            <img  src={slide3} alt="slide1"></img>
                            <div className="caption right-align">
                                <h3>BRAVEHARTED</h3>
                                <h5 className="light gray-text text-lighten-3">BOLDEST OF THEM ALL <i className="material-icons large">mood</i> ....</h5>
                            </div>
                        </li>
                        <li >
                            <img  src={slide4} alt="slide1"></img>
                            <div className="caption center-align">
                                <h3>BRAVEHARTED</h3>
                                <h5 className="light gray-text text-lighten-3">BOLDEST OF THEM ALL <i className="material-icons large">mood</i> ....</h5>
                            </div>
                        </li>
                        <li >
                            <img  src={slide5} alt="slide5"></img>
                            <div className="caption center-align">
                                <h3>BRAVEHARTED</h3>
                                <h5 className="light gray-text text-lighten-3">BOLDEST OF THEM ALL <i className="material-icons large">mood</i> ....</h5>
                            </div>
                        </li>
                    
                    </ul>
            </div>
            </React.Fragment>
            
        );
    }
}
 
export default Homeslide;