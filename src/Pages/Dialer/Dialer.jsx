import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Numpad from 'components/Keyboard';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { useEffect } from 'react';
import { useState } from 'react';
import { Box } from 'components/reusableComponents';
import { useNavigate } from 'react-router-dom';

const Dialer = () => {
  const [number, setNumber] = useState('');
  const [locFilter, setLocFilter] = useState('');
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const navigate = useNavigate();

  useEffect(() => {
    setLocFilter(filter);
  }, [filter]);

  const filteredContacts = contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(locFilter) || phone.includes(locFilter)
  );

  const onCallBtnPress = () => {
    window.location.href = `tel:${number}`;
  };

  const onSaveBtnPress = () => {
    navigate('new', { state: { number } });
  };

  const onFilterChange = number => {
    setNumber(number);
    setLocFilter(number);
  };
  return (
    <>
      <Filter />
      <Box height={270} overflowY="scroll">
        {locFilter && <ContactsList contacts={filteredContacts} />}
      </Box>
      <Numpad
        onCallBtnPress={onCallBtnPress}
        onSaveBtnPress={onSaveBtnPress}
        onFilterChange={onFilterChange}
      />
    </>
  );
};

export default Dialer;
