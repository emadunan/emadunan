// components/QuoteCard.tsx
import React from 'react';
import styles from './QuoteCard.module.css';

interface QuoteItem {
  text: string;
  createdAt: string;
}

const QuoteCard: React.FC<{ item: QuoteItem }> = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.quoteBody}>
        <p className={styles.text}>&ldquo;{item.text}&rdquo;</p>
        <p className={styles.meta}>{new Date(item.createdAt).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
