import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  fetchContacts,
  deleteContact,
  addContact,
  getContactInfo,
  editContact,
} from '../operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  selectedItem: {},
};

const pendingHandler = state => ({
  ...state,
  isLoading: true,
});
const rejectedHandler = (state, { payload }) => {
  if (!payload) return;
  return {
    ...state,
    isLoading: false,
    error: payload,
  };
};

const fulfilledHandler = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: null,
});

const extraActions = [
  fetchContacts,
  deleteContact,
  addContact,
  getContactInfo,
  editContact,
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    clearContactsInfo(state) {
      state.selectedItem = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(({ id }) => id === payload.id);
        state.items.splice(index, 1, payload);
      })
      .addCase(getContactInfo.fulfilled, (state, { payload }) => {
        state.selectedItem = payload;
      })
      .addMatcher(action => action.type.endsWith('/rejected'), rejectedHandler)
      .addMatcher(action => action.type.endsWith('/pending'), pendingHandler)
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        fulfilledHandler
      );
  },
});

export const { clearContactsInfo } = contactsSlice.actions;

export { contactsSlice };
