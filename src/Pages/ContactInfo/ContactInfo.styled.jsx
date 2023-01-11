import styled from '@emotion/styled';

const ProfileAvatar = styled.img`
  height: 150px;
  width: 150px;
  position: absolute;
  bottom: 0;
  right: 50px;
  transform: translateY(50%);

  border-radius: 50%;
`;

const Name = styled.p`
  overflow: hidden;
  max-width: 260px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 60px;
`;

const Info = styled.p`
  font-size: 24px;
  margin-bottom: 15px;
`;

const CallEmailBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 5px;
  &:focus,
  &:hover {
    background-color: rgba(100, 100, 100, 0.2);
  }
`;

const NavBar = styled.div`
  height: 50px;
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

export { ProfileAvatar, Name, Info, CallEmailBtn, NavBar, NavItem };
