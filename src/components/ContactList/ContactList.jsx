import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
