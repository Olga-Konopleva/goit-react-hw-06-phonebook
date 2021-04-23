import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteContact } from '../../redux/contacts/contacts-action';

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

const getContacts = id => state =>
  state.contacts.items.find(contact => contact.id === id);

const ContactItem = ({ id }) => {
  console.log(id);
  const { name, number } = useSelector(getContacts(id));
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Li>
      {name}: {number}
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ContactItem;
