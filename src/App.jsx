import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import SignUp from "./Contact";
import Footer from "./Footer"
import { Switch,  Route, Redirect} from 'react-router-dom';

const App = () => {
  return( <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={SignUp} />     
      <Redirect to='/' />
    </Switch>
    <Footer />
</>
);
};
export default App;