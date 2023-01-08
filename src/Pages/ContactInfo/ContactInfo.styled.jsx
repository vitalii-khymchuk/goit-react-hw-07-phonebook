import styled from '@emotion/styled';

const ProfileAvatar = styled.img`
  position: absolute;
  bottom: 0;
  right: 50px;
  transform: translateY(50%);

  border-radius: 50%;
`;

const Name = styled.p`
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

export { ProfileAvatar, Name, Info, CallEmailBtn, NavBar };
