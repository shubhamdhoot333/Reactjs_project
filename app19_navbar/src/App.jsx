import React from 'react';  
import { Route, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from "./Error"
import Menu from "./Menu";

const  App = () => { 

  const Name =() =>{
    return <h1> hello ,i am subu</h1>;
  };
return (
   <>
   <Menu />
   <Switch>
      <Route exact  path='/' component= {About } />
      <Route exact path='/contact' component= { Contact } />
      <Route path='/contact/Name' component= { Name } />
      <Route  component= { Error } />    
   </Switch>
  
     
   </>
 );
    
};  

export default App;

