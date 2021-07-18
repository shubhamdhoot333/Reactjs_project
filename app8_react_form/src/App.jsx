import React, { useState } from 'react';  

function App() {  
  const [name,setName] = useState();
  const [lastname,setLastName] = useState("");

  const [fullName,setFullName]= useState();
  const [lastfullName,setLastfullName] = useState();
  
  const inputEvent= (event) =>{
    setName(event.target.value);
  };

  const inputEventtwo = (event) =>{
    setLastName(event.target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    setFullName(name);
    setLastfullName(lastname);
  }
  return (
      <>
      <div>
      <h1> Hello {fullName}  {lastfullName}</h1>
        <form onSubmit={onSubmit}>
        
        <input type="text" 
        placeholder="Enter your FirstName"
        onChange = { inputEvent }
         value={ name} 
        />
        <br/>
        <input type="text" 
        placeholder="Enter your LastName"
        onChange = { inputEventtwo }
         value={ lastname} 

         />       
        <button type="submit"> Click Me </button>
      </form>
      </div>
      </>
    );
      
};  

export default App;