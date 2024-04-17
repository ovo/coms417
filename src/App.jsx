import './App.css'
import { useState } from 'react';
import { evalFunction } from './helpers/CalculatorOperationClasses'

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
      setResult(evalFunction(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear state
  const clearResult = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display" role="display">{result || '0'}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={clearResult}>C</button>
      </div>    
    </div>
  );
}

export default App
