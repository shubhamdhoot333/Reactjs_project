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
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var curDate = new Date();
curDate = curDate.getHours(); 
var  greeting ='';
var cssStyle = { };

if(curDate>=1 && curDate <12){
greeting = "Good Morning";
cssStyle.color = "green";
}else if(curDate>=12 && curDate<19)
{
  greeting = " Good Afternoon ";
  cssStyle.color = "blue";
}
else{
  greeting = " Good Night";
  cssStyle.color = "red";
}

ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir, <span style ={cssStyle}>{ greeting } </span></h1>
  </div>
  </>,
  document.getElementById('root')
);
