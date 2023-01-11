import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/operations';
import { selectContactsError } from 'redux/contacts/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CreateContNav,
  NavItem,
} from 'Pages/CreateContact/CreateContact.styled';
import { Box, Title } from 'components/reusableComponents';
import base64userAvatar from 'photos/base64userAvatar';
import Uploader from 'components/Uploader';
import ContactsInput from 'components/ContactsForm';
import Error from 'components/Error';
import { useEffect } from 'react';

const CreateContact = () => {
  const [photo, setPhoto] = useState(null);
  const [initData, setInitData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const error = useSelector(selectContactsError);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const initContactInfo = location.state.contactsInfo;

  useEffect(() => {
    setPhoto(initContactInfo.avatar);
    setInitData(initContactInfo);
  }, [initContactInfo]);

  const onFormSubmit = async values => {
    setIsSaving(true);
    const avatar = photo ?? base64userAvatar;
    const contactData = { ...initData, ...values, avatar };
    const { payload } = await dispatch(editContact(contactData));
    const id = payload.id;
    navigate(`/contacts/${id}`, {
      state: location.state,
      replace: true,
    });
  };

  const onPhotoUpload = base64Photo => setPhoto(base64Photo);

  const onCancelClick = () =>
    navigate(`/contacts/${initData.id}`, {
      state: location.state,
      replace: true,
    });
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
      <Title>Edit contact</Title>
      {isSaving && <h2>Saving... </h2>}
      {error && <Error msg={error} />}
      {!isSaving && !error && initData && (
        <>
          <Uploader onPhotoUpload={onPhotoUpload} preloadPhoto={photo} />
          <ContactsInput onFormSubmit={onFormSubmit} initData={initData} />
        </>
      )}
    </Box>
  );
};

export default CreateContact;
