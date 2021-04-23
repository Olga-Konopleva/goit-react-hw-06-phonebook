import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  // useEffect(() => {
  //   const initialСontacts = localStorage.getItem('contacts');
  //   const parseContacts = JSON.parse(initialСontacts);
  //   setContacts(parseContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // });

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default connect()(App);
