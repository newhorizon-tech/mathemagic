import { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rowValue } = this.props;
    const { handleCalc } = this.props;

    return (
      <div className="row">
        {rowValue.map(((button) => (
          <button type="button" key={button} onClick={() => handleCalc(button)}>
            {button}
          </button>
        )))}
      </div>
    );
  }
}

export default Row;

Row.propTypes = {
  rowValue: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCalc: PropTypes.func.isRequired,
};
