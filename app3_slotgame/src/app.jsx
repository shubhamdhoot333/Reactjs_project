import React from "react";
import SlotM  from "./SlotMach";
const App = () =>{
return <> 
<center>
<h1 className="heading_style"> 
     🎰  Welcome to {" "}
     <span >Slot machine game</span> 🎰 </h1>
    <div  className="slotmachine">
    <SlotM x="😀" y="😀" z="😀" />
    <SlotM x="🕴️" y="😀" z="🕴️" />
    <SlotM x="🙈" y="🙈" z="🙈"/>
    </div>
</center>
</>
};




export default App;