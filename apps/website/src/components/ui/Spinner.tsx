'use client';

import styles from './Spinner.module.css';
import clsx from 'clsx';

type SpinnerProps = {
  inline?: boolean;
};

const Spinner = ({ inline = false }: SpinnerProps) => {
  return (
    <div className={clsx(styles.container, inline && styles.inline)}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
