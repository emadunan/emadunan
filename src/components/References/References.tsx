import React from 'react'
import ReferenceCard from './ReferenceCard';
import referencesData from "../../data/references.json";
import styles from './References.module.css'

const References: React.FC = () => {
  return (
    <div className={styles.referencesPage}>
      {Object.entries(referencesData).map(([category, items]) => (
        <section key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.grid}>
            {items.map((item, index) => (
              <ReferenceCard
                key={index}
                category={category}
                title={item.title}
                description={item.description}
                url={item.link}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default References