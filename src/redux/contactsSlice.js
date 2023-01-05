import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const pendingHandler = state => ({ ...state, isLoading: true });
const rejectedHandler = (state, { payload }) => ({
  ...state,
  isLoadind: false,
  error: payload,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContact(state, action) {
  //     state.items.push({
  //       name: action.payload.name,
  //       number: action.payload.number,
  //       id: nanoid(),
  //     });
  //   },
  //   deleteContact(state, action) {
  //     return state.filter(e => e.id !== action.payload);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pendingHandler)
      .addCase(addContact.pending, pendingHandler)
      .addCase(deleteContact.pending, pendingHandler)
      .addCase(fetchContacts.rejected, rejectedHandler)
      .addCase(addContact.rejected, rejectedHandler)
      .addCase(deleteContact.rejected, rejectedHandler)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload);
      });
  },
});

export { contactsSlice };
