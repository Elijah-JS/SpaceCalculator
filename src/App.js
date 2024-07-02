import React, {useState} from 'react';
import './App.css';

function App() {

   //functions to play click sound
   const playClickSound = () =>{
    const audio = new Audio('/pulse-blaster.mp3');
    audio.volume = 0.12;
    audio.play()
  }
  const playClickSound2 = () =>{
    const audio = new Audio('/duh.mp3');
    audio.volume = 0.75;
    audio.play()
  }
  const playClickSound3 = () =>{
    const audio = new Audio('/delete.mp3');
    audio.volume = 0.75;
    audio.play()
  }
  const playClickSound4 = () =>{
    const audio = new Audio('/highspeed.mp3');
    audio.volume = 0.75;
    audio.play()
  }
  const playClickSound5 = () =>{
    const audio = new Audio('/equal.mp3');
    audio.volume = 0.75;
    audio.play()
  }

  const [calc, setCalc] = useState("");
  const [result,setResult] = useState("");

  const ops = ['/','*', '+', '-','.'];
  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
    setResult(value);
    playClickSound3();
  }
  const handlePercent=() =>{ 
    setCalc(calc/100);
    playClickSound4();
  
    }
  const handleAllclear=() => {
      setCalc("");
      setResult("");
      playClickSound2();
  }
  const calculate=() =>{
     setCalc(eval(calc).toString())
     playClickSound5();
    };
  
  const updateCalc = value=>{
    if (
      ops.includes(value) && calc === "" || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    )   {

      return;

      }
    setCalc(calc + value);
    if (!ops.includes(value)){
      setResult(eval(calc+ value).toString());
    }
    playClickSound();

   

  }
//If result is truthy and calc is "5", {result ? <span>(0)</span> : ''} 
//{calc || "0"} would render as (0)5.
//If result is falsy and calc is "0", {result ? <span>(0)</span> : ''} 
//{calc || "0"} would render as 0.
  return (
    <div className="container">
      <div className='calculator'>
        <div className='topbar'>
        {result ? <span className='result'>({result})</span>: ''}
          {calc || "0"}  
                 </div>
        
        <div className="button-row">
          <button className="button" onClick={handleAllclear}>AC</button>
          <button className="button" value="DE"onClick={deleteLast}> DE</button>
          <button className="button" value="%" onClick={handlePercent}> %</button>
          <button className="button" value="/"onClick={() => updateCalc('/')}> /</button>
        </div>
        
        <div className="button-row">
          <button className="button" value="7"onClick={() => updateCalc('7')}> 7</button>
          <button className="button" value="8"onClick={() => updateCalc('8')}> 8</button>
          <button className="button" value="9"onClick={() => updateCalc('9')}> 9</button>
          <button className="button" value="*"onClick={() => updateCalc('*')}> *</button>
        </div>
        
        <div className="button-row">
          <button className="button" value="4"onClick={() => updateCalc('4')}> 4</button>
          <button className="button" value="5"onClick={() => updateCalc('5')}> 5</button>
          <button className="button" value="6"onClick={() => updateCalc('6')}> 6</button>
          <button className="button" value="-"onClick={() => updateCalc('-')}> -</button>
        </div>
        
        <div className="button-row">
          <button className="button" value="1"onClick={() => updateCalc('1')}> 1</button>
          <button className="button" value="2"onClick={() => updateCalc('2')}> 2</button>
          <button className="button" value="3"onClick={() => updateCalc('3')}> 3</button>
          <button className="button" value="+"onClick={() => updateCalc('+')}> +</button>
        </div>
        
        <div className="button-row">
          <button className="button " value="00"onClick={() => updateCalc('00')}> 00</button>
          <button className="button" value="0"onClick={() => updateCalc('0')}> 0</button>
          <button className="button " value="."onClick={() => updateCalc('.')}>.</button>
          <button id= "yay"className="button equal-button" value="="onClick={calculate}> =</button>
        </div>
      </div>
    </div>
  );
}

export default App;
