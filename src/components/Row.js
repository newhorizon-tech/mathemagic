import { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    const { row } = this.props;
    return (
      <div className="row">
        {row.map(((button) => (
          <button type="button" key={button}>
            {button}
          </button>
        )))}
      </div>
    );
  }
}

export default Row;

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
