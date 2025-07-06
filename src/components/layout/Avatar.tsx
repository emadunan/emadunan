import React from 'react';
import styles from './Avatar.module.css'

const Avatar: React.FC = () => {
  return (
    <div className={styles.avatarWrapper}>
      <img
        src="/img/profile.jpeg"
        alt="Emad Younan"
        className={styles.avatar}
      />
    </div>
  )
}

export default Avatar