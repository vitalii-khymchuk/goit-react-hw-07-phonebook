import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled.div`
  background-color: grey;
  display: flex;
  align-items: center;
`;

const MainNavigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const NavLinkStyled = styled(NavLink)`
  padding: 5px;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  &.active {
    color: orange;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: orange;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export { Header, MainNavigation, NavLinkStyled };
