import { Component } from 'react';
import Row from './Row';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleCalc = (btn) => {
    this.setState((prevState) => calculate(prevState, btn));
  }

  render() {
    const buttonRows = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    const { total, next } = this.state;
    return (
      <div>
        <div> Calculator </div>
        <div id="calculator-box">
          <div id="display">{next || total}</div>
          {
            buttonRows.map(
              (row) => <Row key={row[0]} rowValue={row} handleCalc={this.handleCalc} />,
            )
          }
        </div>
      </div>
    );
  }
}

export default Calculator;
