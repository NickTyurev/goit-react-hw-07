import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://6793e29b5eae7e5c4d9031cf.mockapi.io/contacts'; 


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to load contacts');
  }
});


export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await axios.post(API_URL, contact);
    return response.data;  
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to add contact');
  }
});


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;  
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to delete contact');
  }
});
