import { FC, useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { Box, Button } from "@mui/material";
import prettier from "prettier";
import parser from "prettier/parser-babel";

interface CodeEditorProps {
  onChange: (v: string) => void;
}

const CodeEditor: FC<CodeEditorProps> = (props) => {
  const [code, setCode] = useState<string>();

  const handleEditorDidChange = (
    value: string | undefined,
    event: editor.IModelContentChangedEvent
  ) => {
    if (value) {
      setCode(value);
      props.onChange(value);
    }
  };

  const codeFormatHandler = () => {
    const formatted = prettier.format(code as string, {
      parser: "babel",
      plugins: [parser],
      useTabs: false,
      semi: false,
      singleQuote: false,
    });

    setCode(formatted);
  };

  return (
    <Box component="div" className="relative h-full w-[calc(100%-10px)]">
      <Button
        variant="contained"
        color="primary"
        className="absolute z-10 top-4 right-4 bg-black"
        onClick={codeFormatHandler}
      >
        Formate
      </Button>
      <Editor
        height="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        // defaultValue="// Write your JavaScript code here!"
        onChange={handleEditorDidChange}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          lineNumbersMinChars: 3,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </Box>
  );
};

export default CodeEditor;
