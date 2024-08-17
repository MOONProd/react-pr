import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');  // 입력된 수식
  const [result, setResult] = useState('');  // 계산 결과

  // 버튼 클릭 시 입력 상태 업데이트
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // 계산 실행
  const calculateResult = () => {
    try {
      setResult(eval(input));  // eval 대신 수식을 직접 파싱할 수 있습니다.
    } catch (error) {
      setResult('Error');
    }
  };

  // 입력 초기화
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input 
        type="text" 
        className="calculator-input" 
        value={input} 
        placeholder="0" 
        readOnly 
      />
      <div className="calculator-result">
        {result ? <span>= {result}</span> : ''}
      </div>
      <div className="calculator-buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="zero-button" onClick={() => handleButtonClick('0')}>0</button>
      </div>
    </div>
  );
}

export default Calculator;
