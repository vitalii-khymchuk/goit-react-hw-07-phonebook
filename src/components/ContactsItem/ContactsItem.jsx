import { useDispatch } from 'react-redux';
import { ContactsItemStyled, Avatar, ContactName } from './ContactsItem.styled';
import { Link } from 'react-router-dom';
import { deleteContact } from 'redux/operations';
import LinkToContact from 'components/LinkToContact';

const ContactsItem = ({ data: { name, phone, id, avatar } }) => {
  const dispatch = useDispatch();
  const onContactDelete = id => dispatch(deleteContact(id));
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

export default ContactsItem;
