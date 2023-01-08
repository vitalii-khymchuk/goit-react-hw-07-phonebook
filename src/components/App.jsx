import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dialer from 'Pages/Dialer';
import Contacts from 'Pages/Contacts';
import CreateContact from 'Pages/CreateContact';
import ContactInfo from 'Pages/ContactInfo';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dialer />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="new" element={<CreateContact />} />
        <Route path="contacts/:id" element={<ContactInfo />} />
      </Route>
    </Routes>
  );
};

export default App;
