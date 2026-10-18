"use client";

import { Button, Header, Logo, Navbar } from "@emadunan/react-ui";

export default function HeaderBasic() {
  return (
    <Header
      title="Acme"
      logo={
        <Logo>
          <img src="/android-chrome-192x192.png" alt="" />
        </Logo>
      }
      nav={
        <Navbar>
          <a href="#">Home</a>
          <a href="#">About</a>
        </Navbar>
      }
      actions={<Button size="sm" variant="secondary">Log in</Button>}
    />
  );
}
