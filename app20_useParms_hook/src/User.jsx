import React from 'react';
import { useParams } from "react-router-dom";

/*const User = ({ match }) => {
return( <>
        <h1>hello i am user { match.params.fname } page </h1>
       </>
    );
};*/

const User = () => {
    const { fname,lname } = useParams();
    return <h1>{fname} {lname}</h1>
}

export default User;