import React from 'react';  
import { FirstName , LastName }from "./App";

const  ComC = () => { 

 return (
   <>
    <FirstName.Consumer> 
       { (fname) => {
          return(
            <LastName.Consumer>
              { (lname) =>{
                   return (
                    <h1>
                      Welcome user<br/>
                      {fname} {lname} 
                    </h1> 
                   ); 
                }} 
            </LastName.Consumer>
           );
        <h1>comc {fname}</h1>
      }} 
    </FirstName.Consumer>
   
   </>
 );
    
};  

export default ComC ;

