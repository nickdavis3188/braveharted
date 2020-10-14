import React, {Component } from 'react';
class Ad extends Component {
    componentDidMount(){
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    render() { 
        return(
            <div className="ad">
                <ins className="adsbygoogle"
                    style={{display:"block"}}
                    data-ad-client="ca-pub-5641450851836516"
                    data-ad-slot="4758775619"
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
            </div>
        ) 
    }
}
 
export default Ad;
