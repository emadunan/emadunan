import React from "react";
import Qualification from "./Qualification";
import styles from "./QualificationsList.module.css";
import qualifications from "../../data/qualifications.json";

const QualificationsList: React.FC = () => {
  return (
    <div className={styles.container}>
      {qualifications.map((q, index) => (
        <Qualification key={index} {...q} />
      ))}
    </div>
  );
};

export default QualificationsList;
