import React from 'react';
import styles from './Header.module.css'
import Navbar from './Navbar';
import Avatar from './Avatar';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Navbar />
      <Avatar />
    </header>
  )
}

export default Header;