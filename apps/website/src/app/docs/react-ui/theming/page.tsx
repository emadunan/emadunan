import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import CodeBlock from "@/components/blogs/CodeBlock";
import styles from "@/components/docs/react-ui/docs.module.css";

export const metadata: Metadata = { title: "Theming" };

const tokenGroups: { group: string; tokens: [string, string][] }[] = [
  {
    group: "Surfaces",
    tokens: [
      ["--color-bg", "Modal, input and dropdown backgrounds"],
      ["--color-bg-subtle", "Header, footer and secondary button backgrounds"],
      ["--color-bg-muted", "Hover background of secondary elements"],
      ["--color-hover", "Highlighted autocomplete suggestion"],
      ["--color-overlay", "Backdrop colour (default rgba(0, 0, 0, 0.5))"],
    ],
  },
  {
    group: "Text",
    tokens: [
      ["--color-text", "Primary text"],
      ["--color-text-muted", "Placeholders and secondary text"],
      ["--color-text-accent", "Active and hovered navigation links in AppHeader"],
    ],
  },
  {
    group: "Borders",
    tokens: [
      ["--color-border", "Default borders of fields and containers"],
      ["--color-border-muted", "Subtle dividers"],
      ["--color-border-strong", "Hovered borders, pressed secondary button"],
    ],
  },
  {
    group: "Brand",
    tokens: [
      ["--color-brand", "Primary buttons, checked controls, active page"],
      ["--color-brand-hover", "Hover state of brand elements"],
      ["--color-brand-active", "Pressed state; active nav links"],
      ["--color-brand-foreground", "Text on brand backgrounds"],
      ["--color-focus-ring", "Focus outline / box-shadow"],
    ],
  },
  {
    group: "Disabled",
    tokens: [
      ["--color-disabled-bg", "Disabled control background"],
      ["--color-disabled-text", "Disabled control text"],
    ],
  },
  {
    group: "Status (each has -hover, -active and -foreground)",
    tokens: [
      ["--color-error", "Error button, field error borders and messages"],
      ["--color-success", "Success button"],
      ["--color-warning", "Warning button"],
      ["--color-info", "Info button"],
    ],
  },
  {
    group: "Layout & shape (defined by the package, override as needed)",
    tokens: [
      ["--radius-sm / -md / -lg", "Corner radii"],
      ["--shadow-sm / -md / -lg", "Elevation shadows"],
      ["--space-1 … --space-4", "Spacing scale (0.25rem – 1rem)"],
      ["--app-header-height", "Offset of the AppHeader mobile drawer (falls back to --header-height)"],
    ],
  },
];

const minimalExample = `:root {
  --color-bg: #ffffff;
  --color-bg-subtle: #f6f7f9;
  --color-bg-muted: #eceff3;
  --color-hover: #eceff3;
  --color-text: #1f2328;
  --color-text-muted: #656d76;
  --color-text-accent: #0969da;
  --color-border: #d0d7de;
  --color-border-muted: #eaeef2;
  --color-border-strong: #8c959f;
  --color-brand: #0969da;
  --color-brand-hover: #0858b9;
  --color-brand-active: #074a9c;
  --color-brand-foreground: #ffffff;
  --color-focus-ring: rgba(9, 105, 218, 0.4);
  --color-disabled-bg: #eaeef2;
  --color-disabled-text: #8c959f;
  /* …plus error / success / warning / info with -hover, -active, -foreground */
}

[data-theme="dark"] {
  --color-bg: #0d1117;
  --color-bg-subtle: #161b22;
  --color-text: #e6edf3;
  --color-border: #30363d;
  --color-brand: #2f81f7;
  /* … */
}`;

function getSiteTokens(): string {
  return fs
    .readFileSync(
      path.join(process.cwd(), "src", "components", "docs", "react-ui", "tokens.css"),
      "utf-8",
    )
    .trim();
}

export default function ThemingPage() {
  return (
    <>
      <h1>Theming</h1>
      <p className={styles.lead}>
        The components get all their colours from CSS custom properties. Define them on{" "}
        <code className={styles.inlineCode}>:root</code>, or on any wrapper element, and the
        components pick them up. Redefine them under a dark-mode selector to theme dark mode.
      </p>

      <h2>Tokens</h2>
      {tokenGroups.map(({ group, tokens }) => (
        <div key={group}>
          <h3 className={styles.demoTitle}>{group}</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <tbody>
                {tokens.map(([token, usage]) => (
                  <tr key={token}>
                    <td style={{ width: "40%" }}>
                      <code className={styles.inlineCode}>{token}</code>
                    </td>
                    <td>{usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <h2>Example</h2>
      <p className={styles.paragraph}>A minimal light and dark setup:</p>
      <CodeBlock code={minimalExample} language="css" />

      <h2>Mapping onto an existing palette</h2>
      <p className={styles.paragraph}>
        If your app already has its own variables, point the tokens at them. The live demos on
        this site use the stylesheet below. It is scoped to the docs wrapper, and it follows the
        site&apos;s theme toggle because the site variables change with{" "}
        <code className={styles.inlineCode}>html[data-theme]</code>.
      </p>
      <CodeBlock code={getSiteTokens()} language="css" />
    </>
  );
}
