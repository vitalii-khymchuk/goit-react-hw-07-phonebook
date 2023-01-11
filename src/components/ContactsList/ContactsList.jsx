import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem';
import { Box } from 'components/reusableComponents';
const ContactsList = ({ contacts = [] }) => {
  return (
    <Box>
      <ul>
        {contacts.length > 0 &&
          contacts.map(item => <ContactsItem key={item.id} data={item} />)}
      </ul>
    </Box>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
