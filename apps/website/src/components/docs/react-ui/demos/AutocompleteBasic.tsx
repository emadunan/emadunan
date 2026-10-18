"use client";

import { useState } from "react";
import { AutocompleteInput } from "@emadunan/react-ui";

const countries = [
  "Egypt", "Ethiopia", "Estonia", "France", "Germany", "Greece",
  "Italy", "Japan", "Jordan", "Kenya", "Lebanon", "Morocco",
  "Norway", "Spain", "Sweden", "Tunisia", "Turkey",
];

// Defined outside the component so its identity is stable across renders.
async function fetchCountries(query: string): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 400)); // simulate network
  const q = query.toLowerCase();
  return countries.filter((country) => country.toLowerCase().includes(q));
}

export default function AutocompleteBasic() {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ maxWidth: "20rem" }}>
      <AutocompleteInput<string>
        label="Country"
        placeholder="Start typing, e.g. “e”"
        value={value}
        onValueChange={setValue}
        fetchSuggestions={fetchCountries}
        getSuggestionKey={(country) => country}
        getSuggestionLabel={(country) => country}
        onSelect={setSelected}
        loadingMessage="Searching…"
        emptyMessage="No matches"
      />
      <p style={{ marginTop: "0.5rem" }}>Selected: {selected ?? "none"}</p>
    </div>
  );
}
