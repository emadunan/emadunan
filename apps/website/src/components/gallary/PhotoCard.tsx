// components/PhotoCard.tsx
import React from 'react';
import styles from './PhotoCard.module.css';

interface PhotoItem {
  desc: string;
  date?: string;
  takenBy?: string;
  image: string;
  order?: number;
}

const PhotoCard: React.FC<{ item: PhotoItem }> = ({ item }) => {
  return (
    <div className={styles.card} style={{ order: item.order }}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.desc} className={styles.image} />
        <div className={styles.overlay}>
          <p className={styles.description}>{item.desc}</p>
          <p className={styles.meta}>
            {item.date && <span>{item.date}</span>}
            {item.date && item.takenBy && <span> • </span>}
            {item.takenBy && <span>{item.takenBy}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
