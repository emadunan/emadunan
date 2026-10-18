"use client";

import { useState } from "react";
import { Checkbox } from "@emadunan/react-ui";

export default function CheckboxBasic() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <Checkbox
        label="I accept the terms"
        checked={accepted}
        onChange={(e) => setAccepted(e.target.checked)}
        error={accepted ? undefined : "You must accept the terms"}
      />
      <Checkbox label="Small" size="sm" defaultChecked />
      <Checkbox label="Large" size="lg" />
      <Checkbox label="Disabled" disabled />
    </div>
  );
}
