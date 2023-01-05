import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice';

const rootReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
