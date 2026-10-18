"use client";

import { Textarea } from "@emadunan/react-ui";

export default function TextareaBasic() {
  return (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "28rem" }}>
      <Textarea label="Message" placeholder="Write something…" rows={4} />
      <Textarea label="Bio" rows={3} error="Bio is required" />
    </div>
  );
}
