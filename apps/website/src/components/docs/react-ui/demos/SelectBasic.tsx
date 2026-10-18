"use client";

import { useState } from "react";
import { Select } from "@emadunan/react-ui";

export default function SelectBasic() {
  const [language, setLanguage] = useState("ts");

  return (
    <div style={{ maxWidth: "20rem" }}>
      <Select label="Language" value={language} onChange={(e) => setLanguage(e.target.value)}>
        <Select.Option value="ts">TypeScript</Select.Option>
        <Select.Option value="go">Go</Select.Option>
        <Select.Option value="rs">Rust</Select.Option>
        <Select.Option value="py">Python</Select.Option>
      </Select>
      <p style={{ marginTop: "0.5rem" }}>Selected: {language}</p>
    </div>
  );
}
