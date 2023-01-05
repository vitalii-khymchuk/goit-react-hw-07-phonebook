import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  InputLabel,
  Input,
  ErrorMsgStyled,
} from 'components/ContactsInput/ContactsForm.styled';
import { Button } from 'components/reusableComponents';
import { Title } from 'components/reusableComponents';
import { Box } from 'components/reusableComponents';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(20)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Please enter contact name'),
  number: yup
    .string()
    .min(3)
    .max(20)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please enter contact number'),
});

export default function ContactsInput() {
  const initialValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = (values, { resetForm }) => {
    const isInContacts = contacts.some(contact => {
      const existName = contact.name.toLowerCase();
      const newName = values.name.toLowerCase();
      return existName === newName;
    });
    if (isInContacts) alert(`${values.name} is already in contacts.`);
    else dispatch(addContact(values));
    resetForm();
  };

  return (
    <Box>
      <Title>Create contact</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off">
          <InputLabel>
            Name
            <Input type="text" name="name" />
          </InputLabel>
          <ErrorMsgStyled component="span" name="name" />
          <InputLabel>
            Number
            <Input type="tel" name="number" />
          </InputLabel>
          <ErrorMsgStyled component="span" name="number" />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </Box>
  );
}
