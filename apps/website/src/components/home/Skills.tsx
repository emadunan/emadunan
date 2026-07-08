import React from "react";
import styles from "./Skills.module.css";
import MainContainer from "../layout/MainContainer";

const Skills: React.FC = () => {
  return (
    <MainContainer>
      <section className={styles.skills}>
        <h2>Technical Skills</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Languages & Core Technologies</h3>
            <ul>
              <li>JavaScript / TypeScript</li>
              <li>HTML5 / CSS3 / SQL</li>
              <li>C++ / C# / Python (basic)</li>
              <li>Git / GitHub / CLI Productivity</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Mobile & UI Development</h3>
            <ul>
              <li>React Native / Expo</li>
              <li>Expo Vector Icons</li>
              <li>Responsive & Accessible Design</li>
              <li>Design Systems & UI Patterns</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Frontend Development</h3>
            <ul>
              <li>React / Next.js / Angular / Vite</li>
              <li>Redux Toolkit / Context API</li>
              <li>Tailwind CSS / Tailwind UI</li>
              <li>i18next / React Icons</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Backend & APIs</h3>
            <ul>
              <li>Node.js / Express / NestJS</li>
              <li>Prisma / TypeORM / PostgreSQL</li>
              <li>Redis / WebSockets / Socket.IO</li>
              <li>Auth (Passport.js, JWT, OAuth2)</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>DevOps & Hosting</h3>
            <ul>
              <li>Docker / PM2 / Nginx / Ubuntu</li>
              <li>GitHub Actions / CI Pipelines</li>
              <li>Vultr / DigitalOcean / Namecheap</li>
              <li>SSL & DNS Management</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Testing, Security & Collaboration</h3>
            <ul>
              <li>Vitest / Unit Testing / Debugging</li>
              <li>OWASP / HTTPS / Let's Encrypt</li>
              <li>Agile / Scrum Collaboration</li>
              <li>Arabic (Native), English (Fluent)</li>
            </ul>
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

export default Skills;
