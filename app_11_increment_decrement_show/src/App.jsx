import React, { useState } from 'react';  

function App() { 
 const [num, setNum] = useState(0);

 const incre=() =>{
   setNum(num+1);
 }
 const decre=() =>{
   if(num<0)
   {
    alert('sorry you cannot go to less then zero')
    setNum(0);   
    
   }
   else
   {
  setNum(num-1);
   }
}
  return(
   <>
    <div className="main_div">
       <div className="center_div">
          <h1> {num} </h1>
          <div class="btn_div">
           <button onClick={incre}>Incre</button>
           <button onClick={decre}>Decre</button>
          </div> 
       </div>
    </div>
   </>
  ); 
      
};  

export default App;