import React , { useState, useEffect } from 'react';  


const  Statewise = () => { 
  const [data , setData] =useState([]);

    const getCovidData = async () =>{
    const res = await fetch('https://api.covid19india.org/data.json');
    const actualData = await res.json();
    setData(actualData.statewise);

}

useEffect(() =>{
    getCovidData();
 },[])

return (
   <> 
        <div className="mt-5">
        <center>    <h1>INDIAN COVIED-19 DASHBOARD</h1></center>
        </div>
        
        <div className="table-responsive mt-5">
              <table className="table table-hover">
                   <thead className =" table-dark">
                     <tr>
                       <th> State</th>
                       <th> confirmed</th>
                       <th> recovered</th>
                       <th> death</th>
                       <th> active</th>
                       <th> updated</th>
                    </tr>
                   </thead>
                   <tbody>
                        {
                    data.map((curEle,ind) =>{
                        return(
                                 <tr key={ind} >
                                    <td> {curEle.state}</td>
                                    <td> {curEle.confirmed}</td>
                                    <td> {curEle.recovered}</td>
                                    <td> {curEle.deaths}</td>
                                    <td> {curEle.active}</td>
                                    <td> {curEle.lastupdatedtime}</td>
                                 </tr>
                                );

                     })
                }
                </tbody>
                   
              </table>
        </div>

   </>
 );
    
};  

export default Statewise;

