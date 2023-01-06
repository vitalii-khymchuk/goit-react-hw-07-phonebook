import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const filteredContacts = contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filter) || phone.includes(filter)
  );
  return (
    <>
      <Filter />
      <ContactsList contacts={filteredContacts} />
    </>
  );
};

export default Contacts;
