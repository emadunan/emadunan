import React from "react";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projectItem}>
        <span className={styles.projectNumber}>01</span>
        <div className={styles.projectHeader}>
          <h3>Amen24.org Platform</h3>
          <div className={styles.links}>
            <a
              href="https://github.com/emadunan/amen24" // replace with actual repo or remove if private
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              💻 GitHub Repository
            </a>
            <a
              href="https://amen24.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              🌐 Live Website
            </a>
          </div>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.left}>
            <h4 className={styles.subTitle}>Overview</h4>
            <p>
              Amen24.org is a comprehensive Christian platform that presents Bible content,
              a verse search engine, a glossary, and a library — all fully multilingual. I’m the
              sole developer and architect of the platform; all other contributors serve as content moderators.
            </p>

            <p>
              The project follows a robust monorepo architecture using <em>NestJS</em>, <em>Next.js</em>,
              and <em>React</em>, backed by a <em>PostgreSQL</em> database. It leverages <em>i18next</em> for
              multilingual support and includes shared packages for UI, utilities, and language data.
              Authentication uses access and refresh tokens via <em>Passport.js</em>, while <em>RTK Query</em>
              powers the API layer with token auto-refreshing and caching for reliability.
            </p>
          </div>

          <div className={styles.right}>
            <h4 className={styles.subTitle}>Key Features</h4>
            <ul className={styles.bullets}>
              <li>Multilingual Bible with intuitive chapter browsing.</li>
              <li>Powerful keyword-based Bible search engine.</li>
              <li>Glossary of biblical terms with admin CRUD access.</li>
              <li>Christian book library with Markdown-based content.</li>
              <li>Role-based admin moderation via the admin panel.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.projectItem}>
        <span className={styles.projectNumber}>02</span>
        <div className={styles.projectHeader}>
          <h3>MOI.gov.eg – Egyptian Ministry of Interior Portal</h3>
          <div className={styles.links}>
            <a
              href="https://amen24.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              🌐 Live Website
            </a>
          </div>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.left}>
            <h4 className={styles.subTitle}>Overview</h4>
            <p>
              The official digital portal of the Egyptian Ministry of Interior, providing critical public access to media content, ministry news, e-services, and internal sector subsites.
            </p>
            <p>
              As the project lead, I manage a cross-functional team of 9 developers with varied expertise across .NET, SharePoint, Java, and Swift. The backend is powered by Microsoft SQL Server and a unified .NET API layer. I oversee technical delivery, coordination, and agile planning—ensuring seamless collaboration across web and mobile platforms.
            </p>
          </div>

          <div className={styles.right}>
            <h4 className={styles.subTitle}>Key Features</h4>
            <ul className={styles.bullets}>
              <li>Central portal for Ministry news, public statements, and key announcements.</li>
              <li>Dynamic media center showcasing official news, reports, and video content.</li>
              <li>Subsites for ministry sectors and departments with modular content delivery.</li>
              <li>Seamless mobile integration via Android and iOS apps using shared API services.</li>
              <li>Public e-services offering secure access to citizen-focused digital applications.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.projectItem}>
        <span className={styles.projectNumber}>03</span>
        <div className={styles.projectHeader}>
          <h3>Confidential Police Systems</h3>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.left}>
            <h4 className={styles.subTitle}>Overview</h4>
            <p>
              I have contributed to the development and maintenance of highly sensitive and internal police systems
              serving critical operational and administrative needs within law enforcement. Due to confidentiality and
              national security protocols, detailed information about these systems is not publicly accessible.
            </p>
            <p>
              My role involved collaborating with secure internal teams, applying best practices in software architecture,
              problem solving, and ensuring strict compliance with government IT security standards.
            </p>
          </div>

          <div className={styles.right}>
            <h4 className={styles.subTitle}>Scope of Work</h4>
            <ul className={styles.bullets}>
              <li>Secure and private law enforcement applications</li>
              <li>Critical infrastructure tools supporting daily operations</li>
              <li>Internal-facing systems with multi-level access control</li>
              <li>Compliance with high-level security and audit policies</li>
              <li>Team collaboration under classified development protocols</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
