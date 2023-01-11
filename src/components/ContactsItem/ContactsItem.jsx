import PropTypes from 'prop-types';
import { ContactsItemStyled, Avatar, ContactName } from './ContactsItem.styled';
import LinkToContact from 'components/LinkToContact';

const ContactsItem = ({ data: { name, phone, id, avatar } }) => {
  return (
    <>
      <LinkToContact id={id}>
        <ContactsItemStyled>
          <Avatar src={avatar} alt={`${name}'s avatar`} />
          <div>
            <ContactName>{name}</ContactName>
            <span>{phone}</span>
          </div>
        </ContactsItemStyled>
      </LinkToContact>
    </>
  );
};

ContactsItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};

export default ContactsItem;
