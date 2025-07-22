import React from "react";
import data from "../../data/quotes.json";
import Quote from "./Quote";
import styles from "./Quotes.module.css";

const Quotes: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <img src="/img/Reading-glasses-bro.svg" alt="Reading illustration" />
      </div>
      <ul className={styles.quotes}>
        {data.map((quote) => (
          <Quote key={quote.id} text={quote.text} createdAt={quote.createdAt} />
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
