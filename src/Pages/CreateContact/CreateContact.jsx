import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContactsError } from 'redux/contacts/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreateContNav, NavItem } from './CreateContact.styled';
import { Box, Title } from 'components/reusableComponents';
import base64userAvatar from 'photos/base64userAvatar';
import Uploader from 'components/Uploader';
import ContactsInput from 'components/ContactsForm';
import Error from 'components/Error';

const CreateContact = () => {
  const [photo, setPhoto] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const error = useSelector(selectContactsError);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const onPhotoUpload = base64Photo => setPhoto(base64Photo);

  const onFormSubmit = async values => {
    setIsSaving(true);
    const avatar = photo ?? base64userAvatar;
    const contactData = { ...values, avatar };
    const { payload } = await dispatch(addContact(contactData));
    const id = payload.id;
    navigate(`/contacts/${id}`, { replace: true });
  };

  const onCancelClick = () => navigate('/');
  const numberToSave = location.state?.number ?? '';
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
      {isSaving && <h2>Saving... </h2>}
      {error && <Error msg={error} />}
      {!isSaving && !error && (
        <>
          <Uploader onPhotoUpload={onPhotoUpload} />
          <ContactsInput
            onFormSubmit={onFormSubmit}
            initData={{ phone: numberToSave }}
          />
        </>
      )}
    </Box>
  );
};

export default CreateContact;
