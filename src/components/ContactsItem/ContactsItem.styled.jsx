import styled from '@emotion/styled';

const ContactsItemStyled = styled.li`
  padding: 4px 8px;
  font-size: 16px;

  & span {
    font-weight: 600;
  }

  & button {
    margin-left: 8px;
  }
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export { ContactsItemStyled, Avatar };
