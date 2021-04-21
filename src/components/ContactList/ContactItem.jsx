import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid red;
  color: red;
  width: 80px;
  margin-left: 1em;
  padding: 0.25em 1em;
  &:hover {
    background: LemonChiffon;
  }
`;

const Li = styled.li`
  margin-bottom: 10px;
`;

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <Li>
      {name}: {number}
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </Li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
