import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push({
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      });
    },
    deleteContact(state, action) {
      return state.filter(e => e.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export { contactsSlice };
