import Uploader from 'components/Uploader';
import ContactsInput from 'components/ContactsInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { Title } from 'components/reusableComponents';

const CreateContact = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);

  const onPhotoUpload = base64Photo => setPhoto(base64Photo);
  const onFormSubmit = values => {
    const contactData = { ...values, avatar: photo };
    console.log(contactData);
    dispatch(addContact(contactData));
  };
  return (
    <div>
      <Title>Create contact</Title>
      <Uploader onPhotoUpload={onPhotoUpload} />
      <ContactsInput onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default CreateContact;
