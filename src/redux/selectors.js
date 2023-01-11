const selectContacts = state => state.contacts.items;
const selectContactsError = state => state.contacts.error;

const selectNewContactId = state => state.contacts.newContactId;
const selectContactInfo = state => state.contactInfo.info;
const selectContactInfoError = state => state.contactInfo.error;
const selectIsContactInfoLoading = state => state.contactInfo.isLoading;

const selectFilter = state => state.filter;
const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);
  return contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filter) || phone.includes(filter)
  );
};

export {
  selectContacts,
  selectContactsError,
  selectNewContactId,
  selectFilter,
  selectFilteredContacts,
  selectContactInfo,
  selectIsContactInfoLoading,
  selectContactInfoError,
};
