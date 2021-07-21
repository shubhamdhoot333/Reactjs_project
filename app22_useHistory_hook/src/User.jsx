import React from 'react';
import { useParams,useLocation,useHistory } from "react-router-dom";

/*const User = ({ match }) => {
return( <>
        <h1>hello i am user { match.params.fname } page </h1>
       </>
    );
};*/

const User = () => {
    const { fname,lname } = useParams();
    const location = useLocation();
    const history = useHistory()
    console.log(history);
    return( 
    <>
    <h1>{fname} {lname}</h1>
     <p> my current location {location.pathname}</p>  
     { location.pathname === `/User/subu/dhoot` ?
    ( <button onClick ={ () => history.goBack() }>back page </button>) : null
      } 

      { location.pathname === `/User/subu/dhoot` ?
    ( <button onClick ={ () => history.push("/") }>Home page </button>) : null
      } 
    </>
    );
};

export default User;