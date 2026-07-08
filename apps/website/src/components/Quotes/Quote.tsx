import React from "react";
import styles from "./Quote.module.css";

interface Props {
  text: string;
  createdAt: string;
}

const Quote: React.FC<Props> = ({ text, createdAt }) => {
  return (
    <li className={styles.quote}>
      <p className={styles.text}>"{text}"</p>
      <span className={styles.date}>{formatDate(createdAt)}</span>
    </li>
  );
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default Quote;
