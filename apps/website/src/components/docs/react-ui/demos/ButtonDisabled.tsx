"use client";

import { Button } from "@emadunan/react-ui";

export default function ButtonDisabled() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
    </div>
  );
}
