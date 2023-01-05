import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Button } from 'components/reusableComponents';
import { Box } from 'components/reusableComponents';
import { Title } from 'components/reusableComponents';
import { ContactItem } from './ContactsList.styled';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onContactDelete = id => dispatch(deleteContact(id));

  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter) || number.includes(filter)
  );
  return (
    <Box>
      <Title>Contacts</Title>
      <ol>
        {filteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            <div>
              <span>{name}: </span>
              {number}
              <Button onClick={() => onContactDelete(id)}>Delete</Button>
            </div>
          </ContactItem>
        ))}
      </ol>
    </Box>
  );
}
