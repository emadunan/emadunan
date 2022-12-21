import { FC, useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { Cell } from "../../state";
import { useActions } from "../../hooks/use-actions";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: FC<TextEditorProps> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [editing, setEditing] = useState(false);

  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      setEditing(false);
    };

    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div ref={ref}>
        <MarkdownEditor
          value={cell.content}
          minHeight="10rem"
          theme={"dark"}
          onChange={(val) => updateCell(cell.id, val || "")}
        />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)}>
      <MarkdownPreview source={cell.content || "Click to edit"} />
    </div>
  );
};

export default TextEditor;
