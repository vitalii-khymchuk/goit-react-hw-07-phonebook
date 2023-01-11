import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsError } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { useNavigate } from 'react-router-dom';
import { makeCall } from 'utils/phoneAPI';
import { Box } from 'components/reusableComponents';
import Numpad from 'components/Keyboard';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Error from 'components/Error';

const Dialer = () => {
  const [number, setNumber] = useState('');
  const [locFilter, setLocFilter] = useState('');
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const navigate = useNavigate();

  useEffect(() => {
    setLocFilter(filter);
  }, [filter]);

  const filteredContacts = contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(locFilter) || phone.includes(locFilter)
  );

  const onCallBtnPress = () => makeCall(number);

  const onSaveBtnPress = () => {
    if (!number) return;
    navigate('new', { state: { number } });
  };

  const onNumberChange = number => {
    setNumber(number);
    setLocFilter(number);
  };
  return (
    <>
      {error ? (
        <Error msg={error} />
      ) : (
        <>
          <Filter />
          <Box height={270} overflowY="scroll">
            {locFilter && <ContactsList contacts={filteredContacts} />}
          </Box>
          <Numpad
            onCallBtnPress={onCallBtnPress}
            onSaveBtnPress={onSaveBtnPress}
            onNumberChange={onNumberChange}
          />
        </>
      )}
    </>
  );
};

export default Dialer;
