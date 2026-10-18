"use client";

import { useState } from "react";
import { Backdrop, Button } from "@emadunan/react-ui";

export default function BackdropBasic() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setVisible(true)}>
        Show backdrop
      </Button>
      {visible && <Backdrop onClick={() => setVisible(false)} />}
    </>
  );
}
