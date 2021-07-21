import React from 'react';  
import { Route, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from "./Error"
import Menu from "./Menu";
import Services from './Services';
import User from './User';
import Search from './Search';
const  App = () => { 

  const Name =() =>{
    return <h1> hello ,i am subu</h1>;
  };
return (
   <>
   <Menu />
   <Switch>

      <Route exact  path='/' component= { () =>  <About name="About"/> }  />
      <Route exact path='/contact' component= { Contact } />
      <Route  path='/User/:fname/:lname' component= { User } />
      <Route exact path='/Services' render= { () =>  <Services name="Services" /> } />
      <Route path='/contact/Name' component= { Name } />
      <Route exact path='/Search' component= { Search } />
      <Route  component= { Error } />    
     

   </Switch>
  
     
   </>
 );
    
};  

export default App;

