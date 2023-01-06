import { Box } from 'components/reusableComponents';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, MainNavigation, NavLinkStyled } from './Layout.styled';

const Layout = () => {
  return (
    <Box
      display="grid"
      gridTemplateRows="50px 1fr"
      width={480}
      height={800}
      border="1px solid black"
      mx="auto"
    >
      <Header>
        <MainNavigation>
          <li>
            <NavLinkStyled to="/" end>
              Dialer
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
          </li>
        </MainNavigation>
      </Header>
      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default Layout;
