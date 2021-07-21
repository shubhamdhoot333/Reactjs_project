import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {

return( <>
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark   ">
            <div className="container-fluid mx-5">
                
                        <i>
                            <font size="10px"><i class="fas fa-crown"></i>  Shyam Sarkar  </font>
                        </i>
                    
                
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-dark"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item mx-4">
                    <NavLink  exact activeClassName="active_class" to ="/" > Home</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                    <NavLink  exact activeClassName="active_class" to ="/Contact" > ContactUs</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                    <NavLink  exact activeClassName="active_class" to ="/Services" > Services</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                       <NavLink  exact activeClassName="active_class" to ="/About" > AboutUs</NavLink>
                     </li>
               </ul>
            </div>
  </div>
</nav>


   </div>




       </>
    );
};

export default Menu;