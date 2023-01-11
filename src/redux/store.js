import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filter/filterSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { contactInfoSlice } from './contactsInfo/contactInfoSlice';

const rootReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
  [contactInfoSlice.name]: contactInfoSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
