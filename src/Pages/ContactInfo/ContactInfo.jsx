import { Box } from 'components/reusableComponents';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getContactInfo, deleteContact } from 'redux/operations';
import { selectContactInfo } from 'redux/selectors';
import {
  ProfileAvatar,
  Name,
  Info,
  CallEmailBtn,
  NavBar,
} from './ContactInfo.styled';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { makeCall, writeEmail } from 'utils/phoneAPI';
import { deleteContactsInfo } from 'redux/contactInfoSlice';

const formateDate = date => new Date(date).toLocaleString();

const ContactInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch(getContactInfo(id));
    return () => {
      dispatch(deleteContactsInfo());
    };
  }, []);
  const contactsInfo = useSelector(selectContactInfo);
  const { avatar, createdAt, email, name, phone } = contactsInfo;
  const onCallClick = () => makeCall(phone);
  const onEmailClick = () => writeEmail(email);
  const onDeleteClick = () => {
    dispatch(deleteContact(id));
    navigate(location.state.from, { replace: true, state: location.state });
  };
  const onBackClick = () => {
    navigate(location.state.from, { state: location.state });
  };
  return (
    <Box
      display="grid"
      gridTemplateRows="200px 1fr"
      width={480}
      height={800}
      border="1px solid black"
      mx="auto"
    >
      <Box bg="grey" position="relative">
        <NavBar>
          <button type="button" onClick={onDeleteClick}>
            Delete
          </button>
          <button type="button" onClick={onBackClick}>
            Back
          </button>
        </NavBar>
        <ProfileAvatar src={avatar} alt={`${name}'s avatar`} />
      </Box>
      <Box mt="10px" px="15px">
        <Name>{name}</Name>
        <CallEmailBtn onClick={onCallClick}>
          <Info>{phone}</Info>
          <IoCallOutline size={24} />
        </CallEmailBtn>
        {email && (
          <CallEmailBtn onClick={onEmailClick}>
            <Info>{email}</Info>
            <AiOutlineMail size={24} />
          </CallEmailBtn>
        )}
        <Info>
          Created at: <br /> {formateDate(createdAt)}
        </Info>
      </Box>
    </Box>
  );
};

export default ContactInfo;
