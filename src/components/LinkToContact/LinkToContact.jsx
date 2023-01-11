import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const LinkToContact = ({ id, children }) => {
  const linkRef = useRef();
  const location = useLocation();
  const prevId = location.state?.id;

  useEffect(() => {
    if (!linkRef.current) return;
    if (prevId && prevId === id)
      linkRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [id, prevId]);

  const pathToContact =
    location.pathname === '/' ? `contacts/${id}` : id.toString();

  return (
    <Link ref={linkRef} to={pathToContact} state={{ from: location, id }}>
      {children}
    </Link>
  );
};

LinkToContact.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default LinkToContact;
