import React, { Component } from 'react';  

//class with constructure and super method
class App extends Component {  
    constructor(props){  
        super(props);  
        //first initialise data here 
         this.state = { 
             count:0  
          }  
      }  
      //after we are chanege the data values by setState
      increment(){
          this.setState({
                count:this.state.count + 1
          })
      }
    render () {  
        return (  
            <div className="top">
                <p> Total Click :{this.state.count}</p>  
                <button onClick={ ()=> this.increment() } >Click Here </button>
             </div>   
        );  
    }  
}  


export default App;