import React from 'react';
import Nav from "./component/Nav"
import FIxbtn from './component/Fixbtn';
import Footer from './component/Footer';
import Homeslide from './component/Homeslide';
import Posts from './component/Posts';
import Ad from './component/Ad';

function Home() {
  return (
    <React.Fragment>
      <Nav/>
      <Homeslide/>
      <br></br>
      <Ad/>
      <Posts/>
      <Ad/>
      <FIxbtn/>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
