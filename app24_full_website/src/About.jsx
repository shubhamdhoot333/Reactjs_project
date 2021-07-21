import React from 'react';
const About=(props)=>{
return( <>
     
     <div className="container ">
          <br /><br />
            <div className="row">
                <div className="col-md-6 main_header_left text-center " >
                    <br/><br/>
                    <img src="https://weather-app333.herokuapp.com/images/subu.png" 
                     className="img-fluid"
                     width="500px"
                     height="400px" 
                         alt="images"
                     />
                </div>
                <div className="col-md-6 main_header_left text-center">
                    <br / ><br /> 
                  
                    <p>
                       <h5> " Welcome to Shyam Sarkar "</h5>
                    </p>
                    <br />
                <h2>I Am A <span className="text-primary">Full Stack Developer</span>
                   <br /> And A Freelancer"
                </h2>
                   <br />
                 <a href="https://www.linkedin.com/in/shubhamdhoot333/">
                  <button className="btn btn-primary"> Know More</button>
                </a>
            
            </div>
           
            </div> 
        </div>
  

       </>
    );
};

export default About;