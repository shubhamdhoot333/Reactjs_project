import React, { useState } from 'react';  

function App() {  
  let time = new Date().toLocaleTimeString();
  const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  const [ctime,setCtime] = useState(time)
  setInterval(updateTime,1000)
  //here 1000 minisecond means 1 secound 
  return (
      <>
        <h1>{ ctime }</h1>
      </>
    );
      
};  

export default App;