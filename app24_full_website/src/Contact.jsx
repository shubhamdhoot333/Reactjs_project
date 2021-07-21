import React, { useState } from 'react';  

function Contact() { 
  //hooks 
  //here usestate in pass two object here setfullname hold the updated data 
   const [fullName,setfullName] = useState({ 
     fname : "",
     lname : "",
     email : "", 
    });
  //event 
    const inputEvent= (event) =>{
     
    const value = event.target.value;
    const name = event.target.name;
        setfullName((perValue)=>{
           return{
            ...perValue,
            [name]:value,
                     }
         
        })

  };

  
  const onSubmit = (event) =>{
    event.preventDefault();
   alert(`${fullName.fname}.form submitted successfully`);  
  }
 
    return (
      <>
      <br/><br/>
      <div className="text-center">
                <h2> Hello {fullName.fname} </h2>
                <p>your message {fullName.lname}</p>
                <p>Address {fullName.email}</p>
        
        
        <form onSubmit={onSubmit}>
                <br />

        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
            <input type="text" 
                     className="form-control"    
                    placeholder="Enter your FirstName"
                    name="fname"
                    onChange = { inputEvent }
            />
            </div>
            <div className="col-3"></div>
        </div>
        <br />
        <div className="row">
             <div className="col-3"></div>
             <div className="col-6">    
             <input type="text" 
                     className="form-control"
                    placeholder="Enter your message"
                    name="lname"
                    onChange = { inputEvent}
            />
             </div>
            <div className="col-3"></div>
        </div>
        <br />
        <div className="row">
           <div className="col-3"></div>
           <div className="col-6">  
            <input type="text" 
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                onChange = { inputEvent}
         

         />    
             </div>
             <div className="col-3"></div>
        </div>
        <br />   
        <button type="submit"  class="btn btn-primary"> Click Me </button>
      </form>
    </div>
    
      </>
    );
      
};  

export default Contact;