"use client";

import { Spinner } from "@emadunan/react-ui";

export default function SpinnerBasic() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="lg" color="#d62828" />
    </div>
  );
}
