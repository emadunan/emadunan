import type { Metadata } from "next";
import "@emadunan/react-ui/styles.css";
import "@/components/docs/react-ui/tokens.css";
import MainContainer from "@/components/layout/MainContainer";
import DocsSidebar from "@/components/docs/react-ui/DocsSidebar";
import styles from "@/components/docs/react-ui/docs.module.css";

export const metadata: Metadata = {
  title: {
    template: "%s | React UI | Emad Younan",
    default: "React UI | Emad Younan",
  },
  description: "Documentation and live demos for @emadunan/react-ui",
};

export default function ReactUiDocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainContainer>
      <div className={`react-ui-docs ${styles.layout}`}>
        <DocsSidebar />
        <article className={styles.content}>{children}</article>
      </div>
    </MainContainer>
  );
}
