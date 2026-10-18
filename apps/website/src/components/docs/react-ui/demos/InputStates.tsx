"use client";

import { Input } from "@emadunan/react-ui";

export default function InputStates() {
  return (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "20rem" }}>
      <Input label="Email" defaultValue="not-an-email" error="Enter a valid email address" />
      <Input label="Username" defaultValue="emadunan" disabled />
      <Input label="Small" size="sm" placeholder='size="sm"' />
      <Input label="Large" size="lg" placeholder='size="lg"' />
    </div>
  );
}
