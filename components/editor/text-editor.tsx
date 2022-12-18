import { FC, useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

interface TextEditorProps {}

const TextEditor: FC<TextEditorProps> = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState<string>("Hello Markdown!");

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
          value={value}
          minHeight="10rem"
          theme={"dark"}
          onChange={(val) => setValue(val)}
        />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)}>
      <MarkdownPreview source={value} />
    </div>
  );
};

export default TextEditor;
