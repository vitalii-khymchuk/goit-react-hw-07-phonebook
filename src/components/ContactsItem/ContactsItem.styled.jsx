import styled from '@emotion/styled';

const ContactsItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 4px 8px;
  font-size: 20px;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const ContactName = styled.span`
  display: block;
  font-weight: 600;
`;

export { ContactsItemStyled, Avatar, ContactName };
