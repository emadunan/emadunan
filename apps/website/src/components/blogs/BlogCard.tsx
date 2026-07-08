import Link from "next/link";
import styles from "./BlogCard.module.css";
import { FaRegCalendarPlus } from "react-icons/fa";

interface Props {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({ slug, title, excerpt, date }: Props) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <Link href={`/blogs/${slug}`} className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <time className={styles.date}>
        <FaRegCalendarPlus size={16} />
        <span>{formattedDate}</span>
      </time>
    </Link>
  );
}
