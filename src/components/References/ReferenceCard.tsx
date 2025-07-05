import React from "react";
import styles from "./ReferenceCard.module.css";

interface ReferenceCardProps {
  title: string;
  description: string;
  url: string;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ title, description, url }) => {
  return (
    <a className={styles.referenceCard} href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.visitLink}>Visit →</span>
      </div>
    </a>
  );
};

export default ReferenceCard;
