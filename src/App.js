import './App.css';

import { useState } from 'react';


function App() {
  const [dark,setdark] = useState(false)
  return(
      <div className="App"  style={ dark ? {backgroundColor:"black",color:"white"} : {backgroundColor:"White",color:"black"}}>
      <button on onClick={()=>
      setdark(!dark)
      }>click me</button>
      <br></br>
          <h3 style={{color :"green" }}>
            come waste time 
          </h3>
          <br></br>

          <h3 style={{color :"green" }}>witth me</h3>
          <br></br>
          <br></br>
            <h1 style={{color :"green" }}>THE WET CODE BASE</h1>
            <br></br>
          <br></br>
          <br></br>
          <h3 style={{color :"green" }}>
            come waste time 
          </h3>
          <br></br> <br></br>
          <br></br>
          <h3 style={{color :"green" }}>
            come waste time with me
          </h3>
          <br></br>
          <h3 style={{color :"green" }}>
            come waste time with me
          </h3>
          <br></br>
          <h1 style={{color :"green" }}>GOOD BYE,CLEAN CODE</h1>
          <br></br>
          <br></br>
          <h3  style={{color :"green" }}>
            come waste time
          </h3>
          <br></br>
          <h3 style={{color :"green" }}>
            come waste time with me
          </h3>
          <br></br>
          <h1 style={{color :"green" }}>MY DECADE IN REVIEW</h1>

      </div>
    );
}
export default App;
