import React from "react";
import { FaMedal, FaFilePdf } from "react-icons/fa";

import styles from "./AwardedItem.module.css";

interface AwardedItemProps {
  title: string;
  description: string;
  year: number;
  issuer: string;
  certificateUrl: string;
}

const AwardedItem: React.FC<AwardedItemProps> = ({
  title,
  description,
  year,
  issuer,
  certificateUrl,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <FaMedal className={styles.icon} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.meta}>
          <span>{year}</span>
          <span className={styles.dot}>•</span>
          <span>{issuer}</span>
        </div>

        <p className={styles.description}>
          {description}
        </p>
      </div>

      <a
        href={certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        <FaFilePdf />
        <span>Certificate</span>
      </a>
    </article>
  );
};

export default AwardedItem;