"use client";

import { Input } from "@emadunan/react-ui";

export default function InputNumber() {
  return (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "20rem" }}>
      <Input type="number" label="Quantity (wheel blocked)" defaultValue={1} />
      <Input type="number" label="Quantity (wheel allowed)" defaultValue={1} allowWheelChange />
    </div>
  );
}
