import React, {useState } from 'react';  


//here we use hooks  useState 
  
function App() {  
    
    
   let newTime = new Date().toLocaleTimeString();
   //hooks  
   const [ctime ,setCtime] = useState(newTime);
     let mese;
   if((0<newTime )||(12>newTime))
    {
        mese="AM";
    }
    else{
        mese="PM";
    }
    //eventhandler
    const  UpdateTime =() =>{
       let  newCTime = new Date().toLocaleTimeString();
        setCtime(newCTime);
    };
  return (  
    <div>  
      <p>{ ctime }{ mese }  </p>  
      {/* evente fire*/ } 
      <button onClick = { UpdateTime}>  
        GET TIME  
      </button>  
    </div>  
  );  
}  

export default App;