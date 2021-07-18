import React, { useState } from 'react';  

function App() { 
  //hooks
  const[inputList,setInputList] = useState("");
 
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems =() =>{ };
  return(
   <>
    <div className="main_div">
       <div className="center_div">
          <br />
            <h1> Item List</h1>
            <br/>
                <input type="text" placeholder="Add A Item" onChange={ itemEvent }/>
                  <button className ="add"  onClick = { listOfItems }>+</button>

                  <ol>
                  <li><button className ="mul">× </button>  { inputList }</li>
                
                  </ol>
                   
       </div>
    
    </div>
   </>
  ); 
      
};  

export default App;