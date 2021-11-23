import PropTypes from 'prop-types';

const Row = (props) => {
  const { rowValue, handleCalc } = props;

  return (
    <div className="row">
      {rowValue.map(((button) => (
        <button type="button" key={button} onClick={() => handleCalc(button)}>
          {button}
        </button>
      )))}
    </div>
  );
};

export default Row;

Row.propTypes = {
  rowValue: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCalc: PropTypes.func.isRequired,
};
