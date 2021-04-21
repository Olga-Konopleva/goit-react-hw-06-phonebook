import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChangeFilter} />
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
