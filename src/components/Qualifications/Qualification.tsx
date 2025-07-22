import React from "react";
import { FaGraduationCap, FaLaptopCode, FaCertificate } from "react-icons/fa";
import styles from "./Qualification.module.css";

interface Props {
  type: string;
  title: string;
  institution: string;
  year: string;
  link?: string;
}

const getIcon = (type: string) => {
  switch (type) {
    case "Degree":
      return <FaGraduationCap className={styles.icon} title="Degree" />;
    case "Nanodegree":
      return <FaLaptopCode className={styles.icon} title="Nanodegree" />;
    case "Certification":
      return <FaCertificate className={styles.icon} title="Certification" />;
    default:
      return null;
  }
};

const Qualification: React.FC<Props> = ({
  type,
  title,
  institution,
  year,
  link,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {getIcon(type)}
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.institution}>{institution}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.year}>{year}</span>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
};

export default Qualification;
