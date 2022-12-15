import { FC, useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

interface CodeEditorProps {

}

const CodeEditor: FC<CodeEditorProps> = () => {
  const editorRef = useRef<any>(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <Editor
      height="50vh"
      defaultLanguage="javascript"
      defaultValue="// Write your JavaScript code here!"
      onMount={handleEditorDidMount}
    />
  );
}

export default CodeEditor;