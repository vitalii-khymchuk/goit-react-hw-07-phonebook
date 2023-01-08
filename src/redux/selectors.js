const getContacts = state => state.contacts.items;
const selectContactInfo = state => state.contactInfo.info;
const getFilter = state => state.filter;

export { getContacts, getFilter, selectContactInfo };
