import React from "react";
import styles from "./Skills.module.css";

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Programming Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
            <li>C++ / C#</li>
            <li>Python</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>React / Next.js</li>
            <li>Nest.js</li>
            <li>Angular</li>
            <li>.NET</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Node.js / Express</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
            <li>Linux</li>
            <li>Nginx</li>
            <li>Git / GitHub / GitHub Actions</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Other</h3>
          <ul>
            <li>Agile Environments</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Strong Communication</li>
            <li>Arabic (Native), English (Fluent)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
