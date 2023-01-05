import styled from '@emotion/styled';

const UploadedAvatar = styled.img`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const AddImageBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

const ChangeImageBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: transparent;
  border: none;
`;

export { UploadedAvatar, AvatarWrapper, AddImageBtn, ChangeImageBtn };
