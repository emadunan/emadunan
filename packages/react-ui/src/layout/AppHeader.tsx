import React, { useEffect, useId, useState } from "react";
import styles from "./AppHeader.module.css";

interface Props extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  logo: React.ReactNode;
  actions?: React.ReactNode;
  navLabel?: string;
  menuLabel?: string;
  children: React.ReactNode;
}

const AppHeader: React.FC<Props> = ({
  title,
  logo,
  actions,
  navLabel = "Primary navigation",
  menuLabel = "Menu",
  children,
  className,
  ...rest
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerId = useId();
  const navItems = React.Children.toArray(children);

  useEffect(() => {
    if (!menuOpen || typeof document === "undefined") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const renderNavItems = (prefix: string) =>
    navItems.map((child, index) => (
      <li key={`${prefix}-${index}`} className={styles.navItem}>
        {child}
      </li>
    ));

  const closeOnLinkClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={[styles.header, className].filter(Boolean).join(" ")} {...rest}>
      <button
        type="button"
        className={styles.menuButton}
        aria-label={menuLabel}
        aria-controls={drawerId}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.menuIcon} aria-hidden="true" />
      </button>

      <div className={styles.logo}>
        {logo}
        {title && <h1 className={styles.title}>{title}</h1>}
      </div>

      <nav className={styles.desktopNavbar} aria-label={navLabel}>
        <ul className={styles.navList}>{renderNavItems("desktop")}</ul>
      </nav>

      <div className={styles.actions}>{actions}</div>

      {menuOpen && <button type="button" className={styles.overlay} aria-label="Close menu" onClick={() => setMenuOpen(false)} />}

      <nav
        id={drawerId}
        className={[styles.drawer, menuOpen ? styles.drawerOpen : ""].filter(Boolean).join(" ")}
        aria-label={navLabel}
        aria-hidden={!menuOpen}
        onClick={closeOnLinkClick}
      >
        <ul className={styles.drawerNavList}>{renderNavItems("drawer")}</ul>
      </nav>
    </header>
  );
};

export default AppHeader;
