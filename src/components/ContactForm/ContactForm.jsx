import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
