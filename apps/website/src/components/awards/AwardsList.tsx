import React from "react";
import AwardedItem from "./AwardedItem";
import styles from "./AwardsList.module.css";
import { awards } from "./awards";

const AwardsList = () => {
  return (
    <div className={styles.container}>
      {awards.map((award) => (
        <AwardedItem
          key={award.id}
          title={award.title}
          year={award.year}
          issuer={award.issuer}
          description={award.description}
          certificateUrl={award.certificateUrl}
        />
      ))}
    </div>
  );
};

export default AwardsList;