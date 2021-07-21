import React     from 'react';  
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About     from './About';
import Contact   from './Contact';
import Home      from './Home';
import Services  from './Services';
import Error     from "./Error";
import Menu      from "./Menu";
import Footer    from "./Footer";
import { Route, Switch } from "react-router-dom";
import "./index.css";

const  App = () => { 
    return (
   <>
   <Menu />

   <Switch>
      <Route exact path='/' component= { Home } />
      <Route exact path='/About' component= { About } />
      <Route exact path='/Services' component= { Services } />
      <Route exact path='/contact' component= { Contact } />
      <Route  component= { Error } />    
   </Switch>
  
      <Footer />
   </>
 );
    
};  

export default App;

