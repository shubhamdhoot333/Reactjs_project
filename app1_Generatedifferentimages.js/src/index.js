import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//ReactDOM.render('kaya dikana he ','kaha dikana he ','callbackfunction');

/*
1st topic 
1 variable declration  
//const element =<h1>subu</h1>;
//2 embedded declaration 
const name = 'subu';
const element = <h1>Hello, {name}</h1>; 
//3 function calling

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'subu',
  lastName: 'dhoot'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

//object represent 

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

2 topic 
//render function 
 here set interval function call verysecound in render function 
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

//Fragments
1st method 
<React.Fragment>
<p> hello subu</p>
<p> kese ho  subu</p>
<p> hello subu </p>
</React.Fragment>

2ed method (short method )
<>
<p> hello subu</p>
<p> kese ho  subu</p>
<p> hello subu </p>
</>


//praticial of get current date and time 
const element=<>
              <h1> my name is shbham </h1>
              <p>today date is {new Date().toLocaleDateString()} </p>
              <p>current time {new Date().toLocaleTimeString()}</p>
</>
*/
const name="subu"
const path1="https://picsum.photos/200/300";
const path2="https://picsum.photos/250/300";
const path3="https://picsum.photos/300/300";
const element = 
                <>
                <h2 className="sample">My name is {name}</h2>
                <div className="img_div">
                <img src={path1 } alt="random imaes "/>
                <img src={path2 } alt="random imaes "/>
                <img src={path3 } alt="random imaes "/>
                </div>
                
                </>;

ReactDOM.render(element,document.getElementById('root'));
