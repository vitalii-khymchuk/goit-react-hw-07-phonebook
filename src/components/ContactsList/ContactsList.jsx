import ContactsItem from 'components/ContactsItem';

const ContactsList = ({ contacts = [] }) => {
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(item => <ContactsItem key={item.id} data={item} />)}
    </ul>
  );
};

export default ContactsList;
