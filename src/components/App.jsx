import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Box } from './reusableComponents';
import ContactsInput from './ContactsInput';
import ContactsList from './ContactsList';
import CreateContact from 'Pages/CreateContact/CreateContact';
import Filter from './Filter';
import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(getContacts);
  return (
    <Box border="1px solid black" width="300px" mt="15px" ml="15px" p="4px">
      <h1>Phonebook</h1>
      <CreateContact />
      {!!contacts.length && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </Box>
  );
}
