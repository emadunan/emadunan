import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import styles from "./SmartHeader.module.css";

type SplitState = {
  visibleCount: number;
  splitIndex: number;
  hasOverflow: boolean;
};

interface Props extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  logo: React.ReactNode;
  nav: React.ReactNode;
  actions?: React.ReactNode;
  menuLabel?: string;
}

const defaultSplit: SplitState = {
  visibleCount: Number.POSITIVE_INFINITY,
  splitIndex: Number.POSITIVE_INFINITY,
  hasOverflow: false,
};

const SmartHeader: React.FC<Props> = ({
  title,
  logo,
  nav,
  actions,
  menuLabel = "Menu",
  className,
  ...rest
}) => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLUListElement>(null);
  const burgerMeasureRef = useRef<HTMLButtonElement>(null);
  const menuWrapRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState<SplitState>(defaultSplit);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(() => React.Children.toArray(nav), [nav]);

  const calculateSplit = useCallback((reserveBurger: boolean): SplitState => {
    const header = headerRef.current;
    const logoElement = logoRef.current;
    const actionsElement = actionsRef.current;
    const measureList = measureRef.current;

    if (!header || !logoElement || !measureList) {
      return defaultSplit;
    }

    const headerStyle = window.getComputedStyle(header);
    const columnGap = Number.parseFloat(headerStyle.columnGap || "0") || 0;
    const paddingStart = Number.parseFloat(headerStyle.paddingInlineStart || "0") || 0;
    const paddingEnd = Number.parseFloat(headerStyle.paddingInlineEnd || "0") || 0;
    const contentWidth = header.clientWidth - paddingStart - paddingEnd;
    const logoWidth = logoElement.offsetWidth;
    const actionsWidth = actionsElement?.offsetWidth ?? 0;
    const burgerWidth = reserveBurger ? (burgerMeasureRef.current?.offsetWidth ?? 44) : 0;
    const logoHalfWidth = logoWidth / 2;
    const leftCapacity = Math.max(0, (contentWidth / 2) - logoHalfWidth - columnGap);
    const rightCapacity = Math.max(
      0,
      (contentWidth / 2) - logoHalfWidth - actionsWidth - burgerWidth - (columnGap * 2),
    );
    const widths = Array.from(measureList.children).map((item) =>
      Math.ceil((item as HTMLElement).getBoundingClientRect().width),
    );

    let usedLeft = 0;
    let usedRight = 0;
    let splitIndex = 0;
    let visibleCount = 0;
    let isUsingRightSide = false;

    for (const width of widths) {
      const nextWidth = width + (isUsingRightSide || usedLeft > 0 ? columnGap : 0);

      if (!isUsingRightSide && usedLeft + nextWidth <= leftCapacity) {
        usedLeft += nextWidth;
        splitIndex += 1;
        visibleCount += 1;
        continue;
      }

      isUsingRightSide = true;
      const rightNextWidth = width + (usedRight > 0 ? columnGap : 0);

      if (usedRight + rightNextWidth <= rightCapacity) {
        usedRight += rightNextWidth;
        visibleCount += 1;
        continue;
      }

      break;
    }

    return {
      visibleCount,
      splitIndex: Math.min(splitIndex, visibleCount),
      hasOverflow: visibleCount < widths.length,
    };
  }, []);

  const updateSplit = useCallback(() => {
    const withoutBurger = calculateSplit(false);
    const nextSplit = withoutBurger.hasOverflow ? calculateSplit(true) : withoutBurger;

    setSplit((current) => (
      current.visibleCount === nextSplit.visibleCount
      && current.splitIndex === nextSplit.splitIndex
      && current.hasOverflow === nextSplit.hasOverflow
        ? current
        : nextSplit
    ));
  }, [calculateSplit]);

  useLayoutEffect(() => {
    updateSplit();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSplit);
      return () => window.removeEventListener("resize", updateSplit);
    }

    const observer = new ResizeObserver(updateSplit);
    const header = headerRef.current;
    const logoElement = logoRef.current;
    const actionsElement = actionsRef.current;
    const measureList = measureRef.current;

    if (header) observer.observe(header);
    if (logoElement) observer.observe(logoElement);
    if (actionsElement) observer.observe(actionsElement);
    if (measureList) observer.observe(measureList);

    return () => observer.disconnect();
  }, [navItems.length, updateSplit]);

  useLayoutEffect(() => {
    if (!split.hasOverflow) {
      setIsMenuOpen(false);
    }
  }, [split.hasOverflow]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (menuWrapRef.current?.contains(event.target as Node)) return;
      setIsMenuOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const visibleItems = navItems.slice(0, split.visibleCount);
  const startItems = visibleItems.slice(0, split.splitIndex);
  const endItems = visibleItems.slice(split.splitIndex);
  const overflowItems = split.hasOverflow ? navItems.slice(split.visibleCount) : [];

  return (
    <header ref={headerRef} className={`${styles.header} ${className || ""}`} {...rest}>
      <nav className={styles.startNav} aria-label="Primary navigation start">
        <ul className={styles.navList}>
          {startItems.map((item, index) => (
            <li key={`start-${index}`} className={styles.navItem}>{item}</li>
          ))}
        </ul>
      </nav>

      <div ref={logoRef} className={styles.logo}>
        {logo}
        {title && <h1 className={styles.title}>{title}</h1>}
      </div>

      <nav className={styles.endNav} aria-label="Primary navigation end">
        <ul className={styles.navList}>
          {endItems.map((item, index) => (
            <li key={`end-${index}`} className={styles.navItem}>{item}</li>
          ))}
          {split.hasOverflow && (
            <li className={styles.navItem}>
              <div ref={menuWrapRef} className={styles.menuWrap}>
                <button
                  type="button"
                  className={styles.menuButton}
                  aria-expanded={isMenuOpen}
                  aria-haspopup="menu"
                  onClick={() => setIsMenuOpen((current) => !current)}
                >
                  <span className={styles.menuIcon} aria-hidden="true" />
                  <span className={styles.menuText}>{menuLabel}</span>
                </button>
                {isMenuOpen && (
                  <ul className={styles.menu} role="menu" onClick={() => setIsMenuOpen(false)}>
                    {overflowItems.map((item, index) => (
                      <li key={`overflow-${index}`} className={styles.menuItem} role="menuitem">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          )}
        </ul>
      </nav>

      <div ref={actionsRef} className={styles.actions}>{actions}</div>

      <ul ref={measureRef} className={styles.measureList} aria-hidden="true">
        {navItems.map((item, index) => (
          <li key={`measure-${index}`} className={styles.navItem}>{item}</li>
        ))}
      </ul>
      <button ref={burgerMeasureRef} type="button" className={`${styles.menuButton} ${styles.measureButton}`} aria-hidden="true">
        <span className={styles.menuIcon} aria-hidden="true" />
        <span className={styles.menuText}>{menuLabel}</span>
      </button>
    </header>
  );
};

export default SmartHeader;
