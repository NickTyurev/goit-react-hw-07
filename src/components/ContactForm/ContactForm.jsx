import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Name is required'),
    number: Yup.string()
      .matches(
        /^(\+?\d{1,2}\s?)?(\(?\d{1,4}\)?[\s\-]?)?[\d\- ]{5,14}$/,
        'Phone number is not valid'
      )
      .required('Number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        
        dispatch(addContact({ ...values, id: nanoid() }));
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label>Name
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>Number
          <Field type="text" name="number" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.button}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
