"use client";

import { useState } from "react";
import { Input } from "@emadunan/react-ui";

export default function InputBasic() {
  const [name, setName] = useState("");

  return (
    <div style={{ maxWidth: "20rem" }}>
      <Input
        label="Name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
