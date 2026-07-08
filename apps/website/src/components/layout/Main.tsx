import React from 'react';
import styles from './Main.module.css'

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}

export default Main