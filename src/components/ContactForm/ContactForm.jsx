import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-action';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid green;
  color: green;
  width: 200px;
  margin-left: 1em;
  padding: 0.25em 1em;
  &:hover {
    background: LemonChiffon;
  }
`;
const Span = styled.span`
  margin-right: 10px;
  display: inline-block;
`;

const Label = styled.label`
  margin-bottom: 15px;
`;

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  const handleChangeName = e => setName(e.target.value);
  const handleChangeNumber = e => setNumber(e.target.value);

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeName}
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={handleChangeNumber}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
