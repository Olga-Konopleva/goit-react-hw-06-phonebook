import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  padding-left: 5px;
`;

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
