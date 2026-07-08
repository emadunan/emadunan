import type { MDXComponents } from 'mdx/types'
import styles from './mdxComponents.module.css'
import CodeBlock from './CodeBlock'

export const mdxComponents: MDXComponents = {
  code: ({ className, children }) => {
    const isBlock = className?.includes('language-')
    const codeString = String(children).trim()

    if (!isBlock) {
      return <code className={styles.inlineCode}>{codeString}</code>
    }

    return <CodeBlock code={codeString} />
  },

  ul: ({ children }) => (
    <ul className={styles.listUnordered}>
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className={styles.listOrdered}>
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className={styles.listItem}>
      {children}
    </li>
  ),

  hr: () => <hr className={styles.rule} />,

  p: ({ children }) => (
    <p className={styles.paragraph}>
      {children}
    </p>
  ),

  img: ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className={styles.responsiveImage}
  />
),

}
