import React, { useState } from 'react';
import Searchresult from './Searchresult';
const Search = () => {
    const [img,setImg] = useState('');
    const inputEvent =(event) =>{
                const  data = event.target.value;
                setImg(data);
                console.log(data);
                    }
return ( <>
              <br /><br />
        <center>             
         <input type="text" 
                placeholder="search Anythigs"  
                value ={ img } 
                onChange = { inputEvent } />  
        </center>
       
       { img === "" ? null : <Searchresult name= { img } /> }
       </>
    );
};

export default Search;