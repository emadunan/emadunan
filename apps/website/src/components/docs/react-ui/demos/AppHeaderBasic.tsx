"use client";

import { AppHeader, Button } from "@emadunan/react-ui";

export default function AppHeaderBasic() {
  return (
    <AppHeader
      title="Acme"
      logoSrc="/android-chrome-192x192.png"
      logoAlt="Acme home"
      logoHref="#"
      showThemeToggle={false}
      actions={<Button size="sm">Sign in</Button>}
    >
      <a href="#">Dashboard</a>
      <a href="#">Projects</a>
      <a href="#">Settings</a>
    </AppHeader>
  );
}
