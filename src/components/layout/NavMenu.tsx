import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './NavMenu.module.css';
import type { PageLink } from '../../types/PageLink.type';

interface Props {
  links: PageLink[];
}

const NavMenu: React.FC<Props> = ({ links }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => setMenuOpen(false);

  return (
    <div className={styles.menuContainer}>
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {menuOpen && <div className={styles.backdrop} onClick={handleClose} />}

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`}>
        {links.map(({ to, label, match }) => (
          <Link
            key={label}
            to={to}
            className={`${styles.link} ${location.pathname === match ? styles.active : ''}`}
            onClick={handleClose}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
