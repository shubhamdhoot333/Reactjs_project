import React from 'react';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const  App = () => { 

 return (
   <>
    <h1>Welcome to my channel</h1>
    <div className="container">
  <div className="row">
      <div className="col">
          <div className="card">
  <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="200" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" >
  <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." height="200" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" >
  <img src="https://picsum.photos/201/301" className="card-img-top" alt="..." height="200"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
   </>
 );
    
};  

export default App;