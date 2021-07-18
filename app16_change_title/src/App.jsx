import React , { useState, useEffect } from 'react';  

const  App = () => { 
const [num,setNum] = useState(1);

useEffect(() =>{ 
//  alert("I am clicked ");
   document.title = `you click me ${ num } times `;
})

return (
   <>
    <h1>subu</h1>
    <button onClick ={()=>{ setNum(num+1) }}> click me {num}</button>
    
   </>
 );
    
};  

export default App;

