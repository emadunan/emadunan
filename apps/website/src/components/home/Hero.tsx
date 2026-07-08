import React from "react";
import styles from "./Hero.module.css";
import MainContainer from "../layout/MainContainer";

const Hero: React.FC = () => {
  return (
    <MainContainer bgColor="background">
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1 className={styles.heading}>Hi, I'm Emad Younan</h1>
            <p className={styles.subheading1}>
              Software Engineer with 9+ years building scalable web and mobile
              applications. Skilled in TypeScript, React, React Native, NestJS,
              Python, PostgreSQL, and MongoDB; with expertise in system integration,
              DevOps, clean architecture, and maintainable code.
            </p>

            <p className={styles.subheading2}>
              🖥️ Full-stack deployment on Debian-based systems using NGINX, PostgreSQL, & PM2.
            </p>
            <p className={styles.subheading2}>
              📱 Published cross-platform apps on Google Play and AppGallery.
            </p>

            <a href="#footer" className={styles.cta}>
              Let’s Work Together
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="/images/retro-computer-bro.svg"
              alt="Developer Illustration"
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

export default Hero;
