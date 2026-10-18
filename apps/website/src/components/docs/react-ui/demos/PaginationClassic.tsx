"use client";

import { useState } from "react";
import { Pagination } from "@emadunan/react-ui";

export default function PaginationClassic() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Pagination total={240} pageSize={10} currentPage={page} onChange={setPage} />
      <p style={{ marginTop: "0.75rem" }}>Page {page} of 24</p>
    </div>
  );
}
