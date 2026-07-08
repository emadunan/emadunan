"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./NavMenu.module.css";
import type { PageLink } from "../../types/PageLink.type";
import type { FC } from "react";

interface Props {
  links: PageLink[];
}

const NavMenu: FC<Props> = ({ links }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  return (
    <div className={styles.menuContainer}>
      <button className={styles.menuToggle} onClick={handleToggle}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {menuOpen && <div className={styles.backdrop} onClick={handleClose} />}

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ""}`}>
        {links.map(({ to, label, match }) => {
          const isActive =
            match === "/"
              ? pathname === "/"
              : pathname.startsWith(match);

          return (
            <Link
              key={label}
              href={to}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              onClick={handleClose}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavMenu;
