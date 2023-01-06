import { Button } from 'components/reusableComponents';
import { useDispatch } from 'react-redux';
import { ContactsItemStyled, Avatar, ContactName } from './ContactsItem.styled';
import { deleteContact } from 'redux/operations';
import { AiOutlineUser } from 'react-icons/ai';

const ContactsItem = ({ data: { name, phone, id, avatar, email } }) => {
  const dispatch = useDispatch();
  const onContactDelete = id => dispatch(deleteContact(id));
  return (
    <ContactsItemStyled>
      {avatar ? (
        <Avatar src={avatar} alt={`${name}'s avatar`} />
      ) : (
        <AiOutlineUser size={56} />
      )}
      <div>
        <ContactName>{name}</ContactName>
        <span>{phone}</span>
      </div>
    </ContactsItemStyled>
  );
};

export default ContactsItem;
