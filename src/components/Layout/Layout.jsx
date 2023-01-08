import { Box } from 'components/reusableComponents';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Header, MainNavigation, NavLinkStyled } from './Layout.styled';

const Layout = () => {
  const location = useLocation();

  const shouldShowNav =
    location.pathname === '/' || location.pathname === '/contacts';
  return (
    <Box
      display="grid"
      gridTemplateRows="50px 1fr"
      width={480}
      height={800}
      border="1px solid black"
      mx="auto"
    >
      {shouldShowNav && (
        <Header>
          {
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
          }
        </Header>
      )}
      <Outlet />
    </Box>
  );
};

export default Layout;
