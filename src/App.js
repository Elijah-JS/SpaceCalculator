import React, {useState} from 'react';
import './App.css';

function App() {

  const [calc, setCalc] = useState("");
  const [result,setResult] = useState("");

  const ops = ['/','*', '+', '-','.']

  const updateCalc = value=>{
    setCalc(calc + value);
  }

  return (
    <div className="container">
      <div className='calculator'>
        <div className='topbar'>
          <input type='text' placeholder="0"/>
        </div>
        
        <div className="button-row">
          <button className="button" value="AC"> AC</button>
          <button className="button" value="DE"> DE</button>
          <button className="button" value="%"> %</button>
          <button className="button" value="/"> /</button>
        </div>
        
        <div className="button-row">
          <button className="button" value="7"> 7</button>
          <button className="button" value="8"> 8</button>
          <button className="button" value="9"> 9</button>
          <button className="button" value="x"> x</button>
        </div>
        
        <div className="button-row">
          <button className="button" value="4"> 4</button>
          <button className="button" value="5"> 5</button>
          <button className="button" value="6"> 6</button>
          <button className="button" value="-"> -</button>
        </div>
        
        <div className="button-row">
          <button className="button" value="1"> 1</button>
          <button className="button" value="2"> 2</button>
          <button className="button" value="3"> 3</button>
          <button className="button" value="+"> +</button>
        </div>
        
        <div className="button-row">
          <button className="button double-width" value="00"> 00</button>
          <button className="button" value="0"> 0</button>
          <button id= "yay"className="button equal-button" value="="> =</button>
        </div>
      </div>
    </div>
  );
}

export default App;
