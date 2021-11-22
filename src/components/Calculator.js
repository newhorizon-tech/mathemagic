import { Component } from 'react';
import Row from './Row';

class Calculator extends Component {
  constructor() {
    super();
    this.state = [];
  }

  render() {
    const buttonRows = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    return (
      <div>
        <div> Calculator </div>
        <div>{buttonRows.map((row) => <Row key={row[0]} row={row} />)}</div>
      </div>
    );
  }
}

export default Calculator;
