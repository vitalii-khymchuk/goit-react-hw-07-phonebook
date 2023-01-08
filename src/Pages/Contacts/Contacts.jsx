import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { Box } from 'components/reusableComponents';

const Contacts = () => {
  const location = useLocation();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const topPos = location.state?.offsetTop;
  useEffect(() => {
    if (!contacts?.length || !topPos) return;
    window.scroll({
      top: topPos,
      behavior: 'smooth',
    });
  }, [topPos, contacts]);
  const filteredContacts = contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filter) || phone.includes(filter)
  );
  return (
    <>
      <Filter />
      <Box height="700px" overflowY="scroll">
        <ContactsList contacts={filteredContacts} />
      </Box>
    </>
  );
};

export default Contacts;
