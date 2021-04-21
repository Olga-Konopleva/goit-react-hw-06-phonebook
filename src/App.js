import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const initialСontacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(initialСontacts);
    setContacts(parseContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const handleAddContact = newContact => {
    const coincidence = contacts.some(
      contact => contact.name === newContact.name,
    );
    if (coincidence) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter onChangeFilter={handleChangeFilter} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
