import React from 'react';
import Nav from "./component/Nav"
import FIxbtn from './component/Fixbtn';
import Footer from './component/Footer';
import Homeslide from './component/Homeslide';
import Posts from './component/Posts';

function Home() {
  return (
    <React.Fragment>
      <Nav/>
      <Homeslide/>
      <br></br>
      <Posts/>
      <FIxbtn/>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;