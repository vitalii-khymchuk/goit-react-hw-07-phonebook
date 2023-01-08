import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const InputLabel = styled.label`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  margin-left: 15px;
  margin-bottom: 5px;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  display: block;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  margin-bottom: 15px;
`;

export const ErrorMsgStyled = styled(ErrorMessage)`
  width: 95%;
  padding: 4px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid red;
`;
