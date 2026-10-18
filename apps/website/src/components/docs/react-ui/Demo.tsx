import fs from "fs";
import path from "path";
import CodeBlock from "@/components/blogs/CodeBlock";
import { demos } from "./demos";
import styles from "./docs.module.css";

interface Props {
  id: string;
  title: string;
  description?: string;
}

function getDemoSource(id: string): string {
  const filePath = path.join(
    process.cwd(),
    "src",
    "components",
    "docs",
    "react-ui",
    "demos",
    `${id}.tsx`,
  );
  return fs
    .readFileSync(filePath, "utf-8")
    .replace(/^"use client";\s*/, "")
    .trim();
}

export default function Demo({ id, title, description }: Props) {
  const DemoComponent = demos[id];
  if (!DemoComponent) throw new Error(`Unknown demo: ${id}`);

  return (
    <section className={styles.demo}>
      <h3 className={styles.demoTitle}>{title}</h3>
      {description && <p className={styles.paragraph}>{description}</p>}
      <div className={styles.preview}>
        <DemoComponent />
      </div>
      <CodeBlock code={getDemoSource(id)} language="tsx" />
    </section>
  );
}
