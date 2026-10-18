"use client";

import { useState } from "react";
import { DropdownMenu } from "@emadunan/react-ui";

export default function DropdownMenuBasic() {
  const [lastAction, setLastAction] = useState("none");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", minHeight: "12rem", alignContent: "start", flexWrap: "wrap" }}>
      <DropdownMenu trigger="Actions ▾">
        <DropdownMenu.Item onClick={() => setLastAction("Edit")}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setLastAction("Duplicate")}>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Item closeOnSelect={false} onClick={() => setLastAction("Pin (menu stays open)")}>
          Pin
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onClick={() => setLastAction("Delete")}>Delete</DropdownMenu.Item>
      </DropdownMenu>
      <span>Last action: {lastAction}</span>
    </div>
  );
}
