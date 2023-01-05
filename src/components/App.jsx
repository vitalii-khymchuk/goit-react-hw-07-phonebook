import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Box } from './reusableComponents';
import ContactsInput from './ContactsInput';
import ContactsList from './ContactsList';
import Filter from './Filter';

export function App() {
  const contacts = useSelector(getContacts);
  return (
    <Box border="1px solid black" width="300px" mt="15px" ml="15px" p="4px">
      <h1>Phonebook</h1>
      <ContactsInput />
      {!!contacts.length && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </Box>
  );
}
