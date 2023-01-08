import Uploader from 'components/Uploader';
import ContactsInput from 'components/ContactsInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { Box, Title } from 'components/reusableComponents';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreateContNav, NavItem } from './CreateContact.styled';
import { onPhotoChange } from 'components/Uploader/Uploader';
import base64userAvatar from 'photos/base64userAvatar';

const CreateContact = () => {
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const onPhotoUpload = base64Photo => setPhoto(base64Photo);
  const onFormSubmit = values => {
    const avatar = photo ?? base64userAvatar;
    const contactData = { ...values, avatar };
    dispatch(addContact(contactData));
    navigate('/');
  };
  const numberToSave = location.state.number;
  const onCancelClick = () => navigate('/');
  return (
    <Box display="grid" gridTemplateRows="50px 1fr">
      <CreateContNav CreateContNav>
        <NavItem type="submit" form="my-form">
          Save
        </NavItem>
        <NavItem type="button" onClick={onCancelClick}>
          Cancel
        </NavItem>
      </CreateContNav>
      <Title>Create contact</Title>
      <Uploader onPhotoUpload={onPhotoUpload} />
      <ContactsInput onFormSubmit={onFormSubmit} initPhone={numberToSave} />
    </Box>
  );
};

export default CreateContact;
