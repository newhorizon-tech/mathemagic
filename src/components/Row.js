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
      <p>
        {row.map(((button) => (
          <p key={button}>
            {button}
          </p>
        )))}
      </p>
    );
  }
}

export default Row;

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
