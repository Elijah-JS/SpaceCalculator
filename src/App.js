import React, { useState } from 'react';
import './App.css';
import blaster from './assets/pulse-blaster.mp3';
import duh from './assets/duh.mp3';
import deleteSound from './assets/delete.mp3';
import highspeed from './assets/highspeed.mp3';
import equal from './assets/equal.mp3';

function App() {

  // Functions to play click sounds
  const playClickSound = () => {
    const audio = new Audio(blaster);
    audio.volume = 0.05;
    audio.play();
  };
  const playClickSound2 = () => {
    const audio = new Audio(duh);
    audio.volume = 0.4;
    audio.play();
  };
  const playClickSound3 = () => {
    const audio = new Audio(deleteSound);
    audio.volume = 0.4;
    audio.play();
  };
  const playClickSound4 = () => {
    const audio = new Audio(highspeed);
    audio.volume = 0.4;
    audio.play();
  };
  const playClickSound5 = () => {
    const audio = new Audio(equal);
    audio.volume = 0.4;
    audio.play();
  };

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/','*', '+', '-','.'];

  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(value);
    playClickSound3();
  };

  const handlePercent = () => { 
    if (calc !== '') {
      try {
        const value = parseFloat(calc) / 100;
        setCalc(value.toString());
        setResult(value.toString());
        playClickSound4();
      } catch (error) {
        setResult('Error');
      }
    }
  };

  const handleAllclear = () => {
    setCalc("");
    setResult("");
    playClickSound2();
  };

  const calculate = () => {
    try {
      const value = eval(calc);
      if (isNaN(value) || !isFinite(value)) {
        throw new Error("Invalid calculation");
      }
      setCalc(value.toString());
      setResult(value.toString());
      playClickSound5();
    } catch (error) {
      setCalc("");
      setResult("Error");
    }
  };

  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === "") || 
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    const newCalc = calc + value;

    try {
      // Avoid evaluating the expression on invalid input
      if (!ops.includes(value)) {
        const evaluated = eval(newCalc);
        if (isNaN(evaluated) || !isFinite(evaluated)) {
          throw new Error("Invalid calculation");
        }
        setResult(evaluated.toString());
      }
    } catch (error) {
      setResult("Error");
    }

    setCalc(newCalc);
    playClickSound();
  };

  return (
    <div className="container">
      <div className='calculator'>
        <div className='topbar'>
          {result ? <span className='result'>({result})</span> : ''}
          {calc || "0"}
        </div>
        
        <div className="button-row">
          <button className="button" onClick={handleAllclear}>AC</button>
          <button className="button" onClick={deleteLast}>DE</button>
          <button className="button" onClick={handlePercent}>%</button>
          <button className="button" onClick={() => updateCalc('/')}>/</button>
        </div>
        
        <div className="button-row">
          <button className="button" onClick={() => updateCalc('7')}>7</button>
          <button className="button" onClick={() => updateCalc('8')}>8</button>
          <button className="button" onClick={() => updateCalc('9')}>9</button>
          <button className="button" onClick={() => updateCalc('*')}>*</button>
        </div>
        
        <div className="button-row">
          <button className="button" onClick={() => updateCalc('4')}>4</button>
          <button className="button" onClick={() => updateCalc('5')}>5</button>
          <button className="button" onClick={() => updateCalc('6')}>6</button>
          <button className="button" onClick={() => updateCalc('-')}>-</button>
        </div>
        
        <div className="button-row">
          <button className="button" onClick={() => updateCalc('1')}>1</button>
          <button className="button" onClick={() => updateCalc('2')}>2</button>
          <button className="button" onClick={() => updateCalc('3')}>3</button>
          <button className="button" onClick={() => updateCalc('+')}>+</button>
        </div>
        
        <div className="button-row">
          <button className="button" onClick={() => updateCalc('00')}>00</button>
          <button className="button" onClick={() => updateCalc('0')}>0</button>
          <button className="button" onClick={() => updateCalc('.')}>.</button>
          <button id="yay" className="button equal-button" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

