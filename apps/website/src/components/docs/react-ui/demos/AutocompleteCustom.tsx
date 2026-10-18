"use client";

import { useState } from "react";
import { AutocompleteInput } from "@emadunan/react-ui";

type User = { id: number; name: string; email: string };

const users: User[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Alan Turing", email: "alan@example.com" },
  { id: 3, name: "Grace Hopper", email: "grace@example.com" },
  { id: 4, name: "Linus Torvalds", email: "linus@example.com" },
  { id: 5, name: "Margaret Hamilton", email: "margaret@example.com" },
];

async function fetchUsers(query: string): Promise<User[]> {
  const q = query.toLowerCase();
  return users.filter(
    (user) => user.name.toLowerCase().includes(q) || user.email.includes(q),
  );
}

export default function AutocompleteCustom() {
  const [value, setValue] = useState("");

  return (
    <div style={{ maxWidth: "20rem" }}>
      <AutocompleteInput<User>
        label="Assignee"
        placeholder="Name or email (2+ characters)"
        value={value}
        onValueChange={setValue}
        fetchSuggestions={fetchUsers}
        getSuggestionKey={(user) => user.id}
        getSuggestionLabel={(user) => user.name}
        renderSuggestion={(user) => (
          <span>
            <strong>{user.name}</strong>
            <br />
            <small>{user.email}</small>
          </span>
        )}
        onSelect={(user) => console.log("Selected", user)}
        minimumQueryLength={2}
        debounceMs={150}
        loadingMessage="Searching…"
        emptyMessage="No users found"
      />
    </div>
  );
}
