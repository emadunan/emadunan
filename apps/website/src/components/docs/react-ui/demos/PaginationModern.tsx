"use client";

import { useState } from "react";
import { Pagination } from "@emadunan/react-ui";

export default function PaginationModern() {
  const [page, setPage] = useState(5);

  return (
    <Pagination
      variant="modern"
      total={500}
      pageSize={20}
      currentPage={page}
      onChange={setPage}
      siblingCount={2}
    />
  );
}
