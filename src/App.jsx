import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default App;
