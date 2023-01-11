import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  newContactId: '',
};

const pendingHandler = state => ({ ...state, isLoading: true });
const rejectedHandler = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pendingHandler)
      .addCase(addContact.pending, pendingHandler)
      .addCase(deleteContact.pending, pendingHandler)
      .addCase(editContact.pending, pendingHandler)
      .addCase(fetchContacts.rejected, rejectedHandler)
      .addCase(addContact.rejected, rejectedHandler)
      .addCase(deleteContact.rejected, rejectedHandler)
      .addCase(editContact.rejected, rejectedHandler)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.newContactId = payload.id;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(({ id }) => id === payload.id);
        state.isLoading = false;
        state.error = null;
        state.items.splice(index, 1, payload);
      });
  },
});

export { contactsSlice };
