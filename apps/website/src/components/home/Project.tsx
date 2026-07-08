import React from 'react';
import styles from './Project.module.css'

interface Props {
  item: {
    number: string;
    title: string;
    links: {
      href: string;
      label: string;
    }[];
    overview: string;
    features: string[];
    technologies: string[];
  };
}

const Project: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.projectItem}>
      {/* <span className={styles.projectNumber}>{item.number}</span> */}

      <div className={styles.projectHeader}>
        <h3>[{item.number}] {item.title}</h3>
        <div className={styles.links}>
          {item.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.column}>
          <h4 className={styles.subTitle}>Overview</h4>
          <p>{item.overview}</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subTitle}>Key Features</h4>
          <ul className={styles.bullets}>
            {item.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subTitle}>Technologies Used</h4>
          <div className={styles.techStack}>
            {item.technologies.map((tech, i) => (
              <span key={i} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;