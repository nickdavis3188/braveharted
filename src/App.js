import React from 'react';
import ResetPassword from "./ResetPassword"
import Home from './Home';
import Mainpost from "./component/Mainpost"
import {Route,Switch,BrowserRouter} from "react-router-dom"
import Allpost from './Allpost';
import Contact from './contact';
import About from './About';
import Admin from './Admin';
import Forgot from './Forgot';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="https://braveharted.netlify.app/" component={Home}></Route>
        <Route exact path="https://braveharted.netlify.app/post" component={Allpost}></Route>
        <Route exact path="https://braveharted.netlify.app/contact" component={Contact}></Route>
        <Route exact path="https://braveharted.netlify.app/about" component={About}></Route>
        <Route exact path="https://braveharted.netlify.app/admin" component={Admin}></Route>
        <Route exact path="https://braveharted.netlify.app/forgotPwd" component={Forgot}></Route>
        <Route exact path="https://braveharted.netlify.app/resetPWD" component={ResetPassword}></Route>
        <Route exact path="https://braveharted.netlify.app/realpost" component={Mainpost}></Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
