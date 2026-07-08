import React from "react";
import styles from "./Avatar.module.css";
import Link from "next/link";

const Avatar: React.FC = () => {
  return (
    <div className={styles.avatarWrapper}>
      <Link href="/">
        <img
          src="/images/profile.jpeg"
          alt="Emad Younan"
          className={styles.avatar}
        />
      </Link>
    </div>
  );
};

export default Avatar;
