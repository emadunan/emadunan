"use client";

import { useState } from "react";
import { Pagination } from "@emadunan/react-ui";

export default function PaginationLabels() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      total={50}
      pageSize={10}
      currentPage={page}
      onChange={setPage}
      labels={{
        navigation: "Seitennavigation",
        first: "Erste Seite",
        prev: "Vorherige Seite",
        next: "Nächste Seite",
        last: "Letzte Seite",
        page: (n) => `Seite ${n}`,
      }}
    />
  );
}
