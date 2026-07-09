import React, { useEffect, useId, useRef, useState } from "react";
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
  const [isRtl, setIsRtl] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.dir === "rtl" || document.body.dir === "rtl";
  });
  const drawerId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const navItems = React.Children.toArray(children);

  useEffect(() => {
    if (typeof window === "undefined" || !headerRef.current) return;

    const syncDirection = () => {
      setIsRtl(window.getComputedStyle(headerRef.current!).direction === "rtl");
    };

    syncDirection();

    if (typeof MutationObserver === "undefined") return;

    const observer = new MutationObserver(syncDirection);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir", "class", "style"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["dir", "class", "style"] });

    return () => observer.disconnect();
  }, []);

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
    <header ref={headerRef} className={[styles.header, isRtl ? styles.rtl : "", className].filter(Boolean).join(" ")} {...rest}>
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
