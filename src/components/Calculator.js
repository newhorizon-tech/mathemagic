import { useState } from 'react';
import Row from './Row';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});
  const { total, next } = state;

  const handleCalc = (btn) => {
    setState((prevState) => calculate(prevState, btn));
  };

  const buttonRows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div>
      <div> Calculator </div>
      <div id="calculator-box">
        <div id="display">{next || total}</div>
        {
          buttonRows.map(
            (row) => <Row key={row[0]} rowValue={row} handleCalc={handleCalc} />,
          )
        }
      </div>
    </div>
  );
};

export default Calculator;
