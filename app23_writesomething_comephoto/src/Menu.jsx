import React from 'react';
import { NavLink } from "react-router-dom";
const Menu = () => {
return( <>
    <NavLink  exact activeClassName="active_class" to ="/" > AboutUs</NavLink>
    <NavLink  exact activeClassName="active_class" to ="/Contact" > ContactUs</NavLink>
    <NavLink  exact activeClassName="active_class" to ="/Services" > Services</NavLink>
    <NavLink  exact activeClassName="active_class" to ="/Search" > Search</NavLink>
    <NavLink   activeClassName="active_class" to ="/User/subu/dhoot" > User</NavLink>
   
       </>
    );
};

export default Menu;