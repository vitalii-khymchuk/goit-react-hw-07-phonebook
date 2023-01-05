import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const InputLabel = styled.label`
  position: relative;
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 4px;
`;

export const ErrorMsgStyled = styled(ErrorMessage)`
  width: 100%;
  padding: 4px;
  display: block;
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid red;
`;
