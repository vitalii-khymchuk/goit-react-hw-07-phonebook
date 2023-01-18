import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filter/filterSlice';
import { contactsSlice } from './contacts/contactsSlice';

const rootReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
