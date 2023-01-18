import { dynamicSort } from 'utils/sort';
import { selectFilter } from 'redux/filter/selectors';
import { createSelector } from '@reduxjs/toolkit';

const selectIsContactsLoading = state => state.contacts.isLoading;
const selectContactsError = state => state.contacts.error;
const selectContactInfo = state => state.contacts.selectedItem;
const selectContacts = state => {
  const items = [...state.contacts.items];
  if (items.length > 1) {
    return items.sort(dynamicSort('name'));
  }
  return items;
};

const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) =>
    contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(filter) || phone.includes(filter)
    )
);

export {
  selectIsContactsLoading,
  selectContactsError,
  selectContacts,
  selectFilteredContacts,
  selectContactInfo,
};
