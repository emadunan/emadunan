import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import MainContainer from "@/components/layout/MainContainer";

const EnglishCertificate = () => {
  return (
    <MainContainer>
      <section className={styles.section}>
        <h1 className={styles.title}>Bachelor Degree – Graduation Certificate (English)</h1>
        <div className={styles.imageWrapper}>
          <Image
            src="/english-bachelor.jpg"
            alt="Bachelor Degree Graduation Certificate - English"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    </MainContainer>
  );
};

export default EnglishCertificate;