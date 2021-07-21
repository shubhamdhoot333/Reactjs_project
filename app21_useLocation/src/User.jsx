import React from 'react';
import { useParams,useLocation } from "react-router-dom";

/*const User = ({ match }) => {
return( <>
        <h1>hello i am user { match.params.fname } page </h1>
       </>
    );
};*/

const User = () => {
    const { fname,lname } = useParams();
    const location = useLocation();
    console.log(location);
    return( 
    <>
    <h1>{fname} {lname}</h1>
     <p> my current location {location.pathname}</p>  
     { location.pathname === `/User/subu/dhoot` ?
    ( <button onClick ={ () => alert(`you are good `)}>click me </button>) : null
      } 
    </>
    );
};

export default User;