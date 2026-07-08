import React from "react";
import Quote from "./Quote";
import styles from "./Quotes.module.css";
import { quotes } from "./quotes.data";

const Quotes: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <img src="/images/Reading-glasses-bro.svg" alt="Reading illustration" />
      </div>
      <ul className={styles.quotes}>
        {quotes.map((quote) => (
          <Quote key={quote.id} text={quote.text} createdAt={quote.createdAt} />
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
