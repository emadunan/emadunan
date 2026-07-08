import React from 'react';
import styles from './MainContainer.module.css'

interface Props {
  children: React.ReactNode;
  bgColor?: string;
}

const MainContainer: React.FC<Props> = ({ children, bgColor }) => {
  return (
    <div className={styles.container} style={{backgroundColor: bgColor ? `var(--${bgColor})` : `inherit`}}>{children}</div>
  )
}

export default MainContainer