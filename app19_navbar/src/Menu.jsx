import React from 'react';
import { NavLink } from "react-router-dom";
const Menu = () => {
return( <>
    <NavLink  exact activeClassName="active_class" to ="/" > AboutUs</NavLink>
    <NavLink  exact activeClassName="active_class" to ="/Contact" > ContactUs</NavLink>
   
       </>
    );
};

export default Menu;