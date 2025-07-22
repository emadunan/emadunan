import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.heading}>Hi, I'm Emad Younan</h1>
          <p className={styles.subheading1}>
            Full-Stack Web & Cross-Platform Mobile Developer specializing in
            TypeScript, React, React Native, NestJS, and PostgreSQL. I build
            scalable APIs, clean UIs, and production-ready apps for both web and
            mobile platforms.
          </p>
          <p className={styles.subheading2}>
            📱 Registered Google Play Developer with experience publishing
            real-world Android apps.
          </p>

          {/* <p className={styles.subheading2}>
            📱 Registered Android Developer on Google Play and Huawei AppGallery, with experience publishing real-world mobile apps across multiple platforms.
          </p> */}

          <a href="#contact" className={styles.cta}>
            Let’s Work Together
          </a>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/img/retro-computer-bro.svg"
            alt="Developer Illustration"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
