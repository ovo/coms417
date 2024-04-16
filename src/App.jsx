import './App.css'
import { useState } from 'react';

function App() {
  // State storing the current value of the calculation
  const [result, setResult] = useState('');

  // Modify state with the new input
  const handleClick = (value) => {
    setResult(result + value);
  };

  // Evaluate current state
  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear state
  const clearResult = () => {
    setResult('');
  };

  return (
    <div className="calculator" data-testid="calculator-wrapper">
      <div className="display" data-testid="calculator-result" >{result || '0'}</div>
      <div className="buttons" data-testid="calculator-buttons">
        <button onClick={() => handleClick('7')} data-testid="calculator-button-7">7</button>
        <button onClick={() => handleClick('8')} data-testid="calculator-button-8">8</button>
        <button onClick={() => handleClick('9')} data-testid="calculator-button-9">9</button>
        <button onClick={() => handleClick('+')} data-testid="calculator-button-add">+</button>
        <button onClick={() => handleClick('4')} data-testid="calculator-button-4">4</button>
        <button onClick={() => handleClick('5')} data-testid="calculator-button-5">5</button>
        <button onClick={() => handleClick('6')} data-testid="calculator-button-6">6</button>
        <button onClick={() => handleClick('-')} data-testid="calculator-button-sub">-</button>
        <button onClick={() => handleClick('1')} data-testid="calculator-button-1">1</button>
        <button onClick={() => handleClick('2')} data-testid="calculator-button-2">2</button>
        <button onClick={() => handleClick('3')} data-testid="calculator-button-3">3</button>
        <button onClick={() => handleClick('*')} data-testid="calculator-button-mult">*</button>
        <button onClick={() => handleClick('0')} data-testid="calculator-button-0">0</button>
        <button onClick={() => handleClick('.')} data-testid="calculator-button-decimal">.</button>
        <button onClick={calculateResult} data-testid="calculator-button-equals">=</button>
        <button onClick={() => handleClick('/')} data-testid="calculator-button-div">/</button>
        <button onClick={clearResult} data-testid="calculator-button-clear">C</button>
      </div>    
    </div>
  );
}

export default App
