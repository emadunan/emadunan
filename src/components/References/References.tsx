import React, { useState } from "react";
import ReferenceCard from "./ReferenceCard";
import styles from "./References.module.css";
import { referencesData } from "./references.data";

const References: React.FC = () => {
  const allData = Object.entries(referencesData);

  const [data, setData] = useState(allData);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchText = e.target.value.toLowerCase();

    const filtered = allData
      .map(([category, items]) => {
        const matchedItems = items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText) ||
            category.toLowerCase().includes(searchText),
        );
        return [category, matchedItems] as [string, typeof items];
      })
      .filter(([_, items]) => items.length > 0);

    setData(filtered);
  }

  return (
    <div className={styles.referencesPage}>
      <div className={styles.filterContainer}>
        <input
          placeholder="Filter resources..."
          onChange={handleChange}
          className={styles.filterInput}
        />
      </div>

      {data.map(([category, items]) => (
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
  );
};

export default References;
