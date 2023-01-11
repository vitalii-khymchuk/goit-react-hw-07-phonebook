import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Error from 'components/Error';
import { useSelector } from 'react-redux';
import { Box } from 'components/reusableComponents';
import {
  selectContactsError,
  selectFilteredContacts,
} from 'redux/contacts/selectors';

const Contacts = () => {
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <>
      {error ? (
        <Error msg={error} />
      ) : (
        <>
          <Filter />
          <Box height="700px" overflowY="scroll">
            <ContactsList contacts={filteredContacts} />
          </Box>
        </>
      )}
    </>
  );
};

export default Contacts;
