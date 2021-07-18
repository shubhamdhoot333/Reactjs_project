import React, { useState } from 'react';  

function App() {  
  const purple= "#8e44ad";
  const [bg,setBg]=useState(purple);
  const [name,setName] = useState('hello subu');
  const bgChange=() =>{
    let newBg = " #34495e";
    setBg(newBg)
    setName("ohhh subuji  ");
 };
 
 const bgBack = () =>{
    setBg(purple);
    setName("lala ji");
 };
  return (
      <>
      <div style = {{ backgroundColor:bg }}>
      
        <button onClick={bgChange} onDoubleClick={bgBack} >{ name }  </button>
      </div>
      </>
    );
      
};  

export default App;