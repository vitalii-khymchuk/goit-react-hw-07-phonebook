import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice';
import { contactInfoSlice } from './contactInfoSlice';

const rootReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
  [contactInfoSlice.name]: contactInfoSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
