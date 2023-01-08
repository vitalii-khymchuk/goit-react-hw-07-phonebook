import styled from '@emotion/styled';

const CreateContNav = styled.div`
  background-color: grey;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.button`
  padding: 5px;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  &:hover,
  &:focus {
    color: orange;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export { CreateContNav, NavItem };
