import { useLocation, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

const LinkToContact = ({ id, children }) => {
  const [offsetTop, setOffsetTop] = useState(0);
  const linkRef = useRef();
  const location = useLocation();
  useEffect(() => {
    if (!linkRef.current) return;
    setOffsetTop(linkRef.current.offsetTop);
  }, []);
  const pathToMovie =
    location.pathname === '/' ? `contacts/${id}` : id.toString();
  return (
    <Link ref={linkRef} to={pathToMovie} state={{ from: location, offsetTop }}>
      {children}
    </Link>
  );
};

export default LinkToContact;
