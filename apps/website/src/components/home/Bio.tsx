import React from "react";
import styles from "./Bio.module.css";
import MainContainer from "../layout/MainContainer";

const Bio: React.FC = () => {
  return (
    <MainContainer>
      <section className={styles.bio}>
        <h2>About Me</h2>

        <p>
          I’m <strong>Emad Younan</strong>, a software engineer from Egypt with over
          9 years of professional experience building reliable, maintainable, and scalable
          software systems. My work spans backend and frontend development, system automation,
          and production-grade application architecture.
        </p>

        <p>
          I work extensively with JavaScript and TypeScript, building modern web platforms
          using React, Next.js, NestJS, and PostgreSQL. In addition, I use Python for backend
          development, automation, and system integrations, especially in workflows that
          require scripting, data processing, or infrastructure-level tooling.
        </p>

        <p>
          Before transitioning fully into software engineering in 2017, I worked for
          10 years as a systems administrator and technical support specialist at the
          Egyptian Ministry of Interior. This background gave me strong hands-on experience
          with Linux administration, server configuration, networking fundamentals, and
          Bash scripting for automation and operational efficiency.
        </p>

        <p>
          I hold a Bachelor’s degree in Information Systems (2006) and have earned multiple
          credentials from institutions such as Harvard and Udacity. I maintain a strong
          habit of continuous learning across software engineering, system design, and
          security fundamentals.
        </p>

        <p>
          My values are grounded in a conservative Christian faith—guided by ethics,
          integrity, and accountability. These principles influence how I work, collaborate,
          and approach responsibility in both technical and human contexts.
        </p>

        <p>
          I bring a calm, disciplined, and security-aware mindset to my work, with a strong
          focus on clarity, ownership, and long-term maintainability. I enjoy solving complex
          problems, improving systems incrementally, and building software that stands up
          well under real operational demands.
        </p>
      </section>

    </MainContainer>
  );
};

export default Bio;
