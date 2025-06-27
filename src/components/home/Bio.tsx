import React from "react";
import styles from "./Bio.module.css";

const Bio: React.FC = () => {
  return (
    <section className={styles.bio}>
      <h2>About Me</h2>
      <p>
        I’m <strong>Emad Younan</strong>, a full-stack web developer from Egypt with over 7 years of hands-on experience in JavaScript, TypeScript, React, Next.js, NestJS, and PostgreSQL. I build elegant, performant, and scalable applications for the modern web.
      </p>
      <p>
        My journey has been shaped by deep faith, national pride, and resilience. As a Christian in Egypt, I’ve encountered unique challenges, but I’ve always chosen to respond with strength, compassion, and a commitment to excellence. I love my country and believe in making a positive difference—guided by the teachings of Jesus to overcome adversity with grace and perseverance.
      </p>
      <p>
        I served as an officer in the Egyptian Police after graduating with a degree in Information Systems. During my decade of service, I specialized in technical infrastructure and systems administration. In 2017, I transitioned to web development, pouring years of intense study into becoming a certified, skilled, and passionate developer.
      </p>
      <p>
        I’ve earned multiple credentials from institutions like Harvard and Udacity, and I now dedicate myself to solving problems with code, delivering real-world value, and continuing my personal and professional transformation. Along the way, I’ve also excelled in physical and tactical challenges—achieving top ranks in police-level shooting competitions.
      </p>
      <p>
        Despite the discipline and intensity of my journey, I’m a deeply sensitive, romantic soul. I’m currently single and open to new chapters in both life and love.
      </p>
    </section>
  );
};

export default Bio;
