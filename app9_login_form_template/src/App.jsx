import React, { useState } from 'react';  

function App() { 
  //hooks 
  //here usestate in pass two object here setfullname hold the updated data 
   const [fullName,setfullName] = useState({ 
     fname : "",
     lname : "",
     email : "", 
    });
  //event 
    const inputEvent= (event) =>{
     //  setName(event.target.value);
    //console.log(event.target.value)
    //console.log(event.target.name)
    // console.log(event.target.placeholder)
    const value = event.target.value;
    const name = event.target.name;
        setfullName((perValue)=>{
           return{
            ...perValue,
            [name]:value,
                     }
          //            console.log(preValue);
        /*  if(name==='fname')
          {
            return {
            fname:value,
            lname:perValue.lname,
            email:perValue.email,
          };
          }else if(name==='lname')
          {
            return {
            fname:perValue.fname,
            lname:value,
            email:perValue.email,
          };
          } else if(name==='email')
          {
            return {
            fname:perValue.fname,
            lname:perValue.lname,
            email:value
          };
          }
          */ 
        })

  };

  
  const onSubmit = (event) =>{
    event.preventDefault();
   alert("from submitted");  
  }
 
    return (
      <>
      <div>
      <h1> Hello {fullName.fname} {fullName.lname}</h1>
      <p>{fullName.email}</p>
        <form onSubmit={onSubmit}>
        
        <input type="text" 
        placeholder="Enter your FirstName"
        name="fname"
        onChange = { inputEvent }
         //value={ fullName.fname} 
        />
        <br/>
        <input type="text" 
        placeholder="Enter your LastName"
        name="lname"
        onChange = { inputEvent}
        // value={ fullName.lname} 

         />
         <br />
        
        <input type="text" 
        placeholder="Enter your Email"
        name="email"
        onChange = { inputEvent}
        // value={ fullName.lname} 

         />       
        <button type="submit"> Click Me </button>
      </form>
      </div>
      </>
    );
      
};  

export default App;