import React from "react";
import styles from "./AppHeader.module.css";

interface Props extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  logo: React.ReactNode;
  actions?: React.ReactNode;
  navLabel?: string;
  children: React.ReactNode;
}

const AppHeader: React.FC<Props> = ({
  title,
  logo,
  actions,
  navLabel = "Primary navigation",
  children,
  className,
  ...rest
}) => {
  return (
    <header className={[styles.header, className].filter(Boolean).join(" ")} {...rest}>
      <div className={styles.logo}>
        {logo}
        {title && <h1 className={styles.title}>{title}</h1>}
      </div>

      <nav className={styles.navbar} aria-label={navLabel}>
        <ul className={styles.navList}>
          {React.Children.map(children, (child, index) => (
            <li key={index} className={styles.navItem}>
              {child}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>{actions}</div>
    </header>
  );
};

export default AppHeader;
