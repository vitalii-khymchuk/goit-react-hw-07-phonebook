import { Button } from 'components/reusableComponents';
import { useDispatch } from 'react-redux';
import { ContactsItemStyled, Avatar } from './ContactsItem.styled';
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
        <span>{name}: </span>
        {phone}
        <p>
          <span>Email:</span>
          {email}
        </p>
        <Button onClick={() => onContactDelete(id)}>Delete</Button>
      </div>
    </ContactsItemStyled>
  );
};

export default ContactsItem;
