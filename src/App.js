// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Container from 'Components/Container';
import Form from 'Components/Form';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';

// const useLocalStorage = (key, initialValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? initialValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

function App({ contacts, currentFilter }) {
  const visibleContacts = () => {
    const normalizedFilter = currentFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={visibleContacts()} />
    </Container>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  currentFilter: state.contacts.filter,
});

export default connect(mapStateToProps, null)(App);
