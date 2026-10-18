import Link from "next/link";
import CodeBlock from "@/components/blogs/CodeBlock";
import { categories, componentDocs } from "@/components/docs/react-ui/registry";
import styles from "@/components/docs/react-ui/docs.module.css";

export default function GettingStartedPage() {
  return (
    <>
      <h1>React UI</h1>
      <p className={styles.lead}>
        <code className={styles.inlineCode}>@emadunan/react-ui</code> is a small set of typed
        React components: form controls, navigation, layout and overlays. Their colours come
        from CSS variables, so they take on your app&apos;s theme, including dark mode.
      </p>

      <h2>Installation</h2>
      <CodeBlock code="npm install @emadunan/react-ui" language="bash" />
      <p className={styles.paragraph}>
        The package needs <code className={styles.inlineCode}>react</code> and{" "}
        <code className={styles.inlineCode}>react-dom</code> 19.1 or later as peer
        dependencies.
      </p>

      <h2>Import the styles</h2>
      <p className={styles.paragraph}>
        The component styles are shipped as one stylesheet. Import it once, at the root of
        your app:
      </p>
      <CodeBlock code={`import "@emadunan/react-ui/styles.css";`} language="tsx" />
      <p className={styles.note}>
        The stylesheet includes a small global reset. It sets <code className={styles.inlineCode}>box-sizing</code>,
        removes default margins and padding, makes <code className={styles.inlineCode}>html</code>/
        <code className={styles.inlineCode}>body</code> full height and clears the browser&apos;s
        default <code className={styles.inlineCode}>&lt;button&gt;</code> styles. Import it before
        your own global CSS so your rules take precedence.
      </p>

      <h2>Define the colour tokens</h2>
      <p className={styles.paragraph}>
        The components read colours like <code className={styles.inlineCode}>--color-brand</code>{" "}
        and <code className={styles.inlineCode}>--color-text</code> from your CSS. The package
        does not define them, so you need to set them yourself. See{" "}
        <Link href="/docs/react-ui/theming" className={styles.inlineLink}>Theming</Link> for the
        full list.
      </p>

      <h2>Use a component</h2>
      <CodeBlock
        language="tsx"
        code={`"use client";

import { useState } from "react";
import { Button, Input } from "@emadunan/react-ui";

export default function SignupForm() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit">Sign up</Button>
    </form>
  );
}`}
      />
      <p className={styles.note}>
        <strong>Next.js App Router:</strong> the package&apos;s build does not include a{" "}
        <code className={styles.inlineCode}>&quot;use client&quot;</code> directive. Import its
        components only from files that start with{" "}
        <code className={styles.inlineCode}>&quot;use client&quot;</code>.
      </p>

      <h2>Components</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3 className={styles.demoTitle}>{category}</h3>
          <div className={styles.cardGrid}>
            {componentDocs
              .filter((doc) => doc.category === category)
              .map((doc) => (
                <Link key={doc.slug} href={`/docs/react-ui/${doc.slug}`} className={styles.card}>
                  <div className={styles.cardTitle}>{doc.name}</div>
                  <div className={styles.cardText}>{doc.description}</div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
