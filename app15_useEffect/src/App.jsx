import React , { useState, useEffect } from 'react';  

const  App = () => { 
const [num,setNum] = useState(0);
const [nums,setNums] = useState(0);

useEffect(() =>{ 
  alert("I am clicked ");
 })

return (
   <>
    <h1>subu</h1>
    <button onClick ={()=>{ setNum(num+1) }}> click me {num}</button>
    <button onClick ={()=>{ setNums(nums+1) }}> click me {nums}</button>
   </>
 );
    
};  

export default App;

