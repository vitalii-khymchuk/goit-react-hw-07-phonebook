import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  InputLabel,
  Input,
  ErrorMsgStyled,
} from 'components/ContactsInput/ContactsForm.styled';
import { Button } from 'components/reusableComponents';
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
  phone: yup
    .string()
    .min(3)
    .max(20)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please enter contact number'),
  email: yup
    .string()
    .min(5)
    .max(30)
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email must to match next format: example@mail.com'
    ),
});

const ContactsInput = ({ onFormSubmit, initPhone = '' }) => {
  const initialValues = {
    name: '',
    phone: initPhone,
    email: '',
  };
  const contacts = useSelector(getContacts);

  const onSubmit = (values, { resetForm }) => {
    const isInContacts = contacts.some(contact => {
      const existName = contact.name.toLowerCase();
      const newName = values.name.toLowerCase();
      return existName === newName;
    });
    if (isInContacts) alert(`${values.name} is already in contacts.`);
    else onFormSubmit(values);

    resetForm();
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off" id="my-form">
          <InputLabel>
            Name
            <Input type="text" name="name" />
          </InputLabel>
          <ErrorMsgStyled component="span" name="name" />
          <InputLabel>
            Number
            <Input type="tel" name="phone" />
          </InputLabel>
          <ErrorMsgStyled component="span" name="phone" />
          <InputLabel>
            Email
            <Input type="email" name="email" />
          </InputLabel>
          <ErrorMsgStyled component="span" name="email" />
        </Form>
      </Formik>
    </Box>
  );
};

export default ContactsInput;
