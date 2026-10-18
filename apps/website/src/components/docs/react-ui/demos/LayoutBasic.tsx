"use client";

import { Footer, Header, Layout, Logo, Main } from "@emadunan/react-ui";

export default function LayoutBasic() {
  return (
    <Layout style={{ display: "flex", flexDirection: "column", minHeight: "16rem" }}>
      <Header
        title="Acme"
        logo={
          <Logo>
            <img src="/android-chrome-192x192.png" alt="" />
          </Logo>
        }
        nav={null}
        actions={null}
      />
      <Main style={{ flex: 1 }}>
        <p>Page content goes here.</p>
      </Main>
      <Footer>© {new Date().getFullYear()} Acme</Footer>
    </Layout>
  );
}
