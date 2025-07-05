import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link
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
          My Quotes
        </Link>
      </nav>
    </header>
  );
}
