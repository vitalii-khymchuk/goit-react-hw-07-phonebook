import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import Layout from './Layout';
import Dialer from 'Pages/Dialer';

const Contacts = lazy(() => import('Pages/Contacts'));
const CreateContact = lazy(() => import('Pages/CreateContact'));
const ContactInfo = lazy(() => import('Pages/ContactInfo'));
const EditContact = lazy(() => import('Pages/EditContact'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(fetchContacts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dialer />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="new" element={<CreateContact />} />
        <Route path="contacts/:id" element={<ContactInfo />} />
        <Route path="edit/:id" element={<EditContact />} />
      </Route>
    </Routes>
  );
};

export default App;
