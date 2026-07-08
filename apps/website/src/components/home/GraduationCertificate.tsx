import React from "react";
import MainContainer from "../layout/MainContainer";
import Image from "next/image";
import styles from "./GraduationCertificate.module.css";
import Link from "next/link";

const GraduationCertificate = () => {
  return (
    <MainContainer>
      <section className={styles.section}>
        <h2 className={styles.title}>Bachelor Degree – Graduation Certificate</h2>

        <p className={styles.secondaryLink}>
          <Link href="/qualifications/bachelor">Show English Version</Link>
        </p>

        <div className={styles.imageWrapper}>
          <Image
            src="/graduation-certificate-2006.jpg"
            alt="Bachelor Degree Graduation Certificate"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    </MainContainer>
  );
};

export default GraduationCertificate;