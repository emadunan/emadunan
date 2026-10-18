"use client";

import { useCallback, useState } from "react";
import { Button, Modal } from "@emadunan/react-ui";

export default function ModalBasic() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>

      <Modal isOpen={isOpen} onClose={close} aria-labelledby="demo-modal-title">
        <h3 id="demo-modal-title" style={{ marginBottom: "0.75rem" }}>
          Delete project?
        </h3>
        <p style={{ marginBottom: "1.25rem" }}>
          This action cannot be undone. Press Escape or click outside to cancel.
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button variant="error" onClick={close}>
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}
