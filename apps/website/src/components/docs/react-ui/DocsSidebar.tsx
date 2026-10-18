"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, componentDocs } from "./registry";
import styles from "./docs.module.css";

const BASE = "/docs/react-ui";

const guides = [
  { href: BASE, label: "Getting started" },
  { href: `${BASE}/theming`, label: "Theming" },
];

export default function DocsSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Collapse the mobile menu after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `${styles.sidebarLink} ${pathname === href ? styles.sidebarLinkActive : ""}`;

  return (
    <nav className={styles.sidebar} aria-label="React UI documentation">
      <button
        type="button"
        className={styles.sidebarToggle}
        aria-expanded={open}
        aria-controls="react-ui-docs-nav"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Hide menu" : "Browse components"}
      </button>

      <div
        id="react-ui-docs-nav"
        className={`${styles.sidebarGroups} ${open ? styles.sidebarGroupsOpen : ""}`}
      >
        <div className={styles.sidebarGroup}>
          <p className={styles.sidebarHeading}>Guides</p>
          <ul className={styles.sidebarList}>
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className={linkClass(guide.href)}>
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
  
        {categories.map((category) => (
          <div key={category} className={styles.sidebarGroup}>
            <p className={styles.sidebarHeading}>{category}</p>
            <ul className={styles.sidebarList}>
              {componentDocs
                .filter((doc) => doc.category === category)
                .map((doc) => {
                  const href = `${BASE}/${doc.slug}`;
                  return (
                    <li key={doc.slug}>
                      <Link href={href} className={linkClass(href)}>
                        {doc.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
