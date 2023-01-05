import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Box } from 'components/reusableComponents';
import { Title } from 'components/reusableComponents';
import ContactsItem from 'components/ContactsItem';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  const filteredContacts = contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filter) || phone.includes(filter)
  );
  return (
    <Box>
      <Title>Contacts</Title>
      <ul>
        {filteredContacts.map(item => (
          <ContactsItem key={item.id} data={item} />
        ))}
      </ul>
    </Box>
  );
}
