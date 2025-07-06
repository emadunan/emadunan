import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import type { PageLink } from '../../types/PageLink.type';
import type React from 'react';

interface Props {
  links: PageLink[]
}

export const Navbar: React.FC<Props> = ({ links }) => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {links.map(link => <Link
        to={link.to}
        className={`${styles.link} ${location.pathname === link.match ? styles.active : ''}`}
      >
        {link.label}
      </Link>)}


      {/* <Link
        to="/"
        className={`${styles.link} ${location.pathname === '/' ? styles.active : ''
          }`}
      >
        Home
      </Link>
      <Link
        to="/what-i-use"
        className={`${styles.link} ${location.pathname === '/references' ? styles.active : ''
          }`}
      >
        What I Use
      </Link>
      <Link
        to="/my-quotes"
        className={`${styles.link} ${location.pathname === '/quotes' ? styles.active : ''
          }`}
      >
        My Qualifications
      </Link>
      <Link
        to="/my-quotes"
        className={`${styles.link} ${location.pathname === '/quotes' ? styles.active : ''
          }`}
      >
        My Quotes
      </Link> */}
    </nav>
  );
}

export default Navbar;
