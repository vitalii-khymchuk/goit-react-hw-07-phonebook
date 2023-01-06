import Uploader from 'components/Uploader';
import ContactsInput from 'components/ContactsInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { Box, Title } from 'components/reusableComponents';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateContact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const onPhotoUpload = base64Photo => setPhoto(base64Photo);
  const onFormSubmit = values => {
    const contactData = { ...values, avatar: photo };
    dispatch(addContact(contactData));
    navigate('/');
  };
  const numberToSave = location.state.number;
  return (
    <Box>
      <Title>Create contact</Title>
      <Uploader onPhotoUpload={onPhotoUpload} />
      <ContactsInput onFormSubmit={onFormSubmit} initPhone={numberToSave} />
    </Box>
  );
};

export default CreateContact;
