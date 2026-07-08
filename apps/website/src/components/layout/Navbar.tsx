"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PageLink } from "../../types/PageLink.type";
import type { FC } from "react";

interface Props {
  links: PageLink[];
}

const Navbar: FC<Props> = ({ links }) => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // or a loader/spinner

  return (
    <nav className={styles.nav}>
      {links.map((link) => {
        const isActive =
          link.match === "/"
            ? pathname === "/"
            : pathname.startsWith(link.match);

        return (
          <Link
            key={link.label}
            href={link.to}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
