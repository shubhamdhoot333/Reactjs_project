import React , { createContext } from 'react';  

import ComA from  "./ComA";

//here createContext  
const FirstName = createContext();
const LastName = createContext();

const  App = () => { 

 return (
   <>
   <FirstName.Provider value = {"subu"}>
      <LastName.Provider value = {"dhoot"}>

          <ComA />  
           
      </LastName.Provider>
   </FirstName.Provider>
   
   </>
 );
    
};  

export default App;
export { FirstName , LastName };
