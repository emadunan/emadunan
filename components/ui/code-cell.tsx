import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";

import CodeEditor from "../editor/code-editor";
import Preview from "../editor/preview";
import bundle from "../bundler/index";
import Resizable from "./resizable";

const CodeCell: FC = () => {
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <Box component="div" className="h-full flex flex-row">
        <Resizable direction="horizontal">
          <CodeEditor onChange={(value) => setInput(value)} />
        </Resizable>
        <Preview code={code} err={err} />
      </Box>
    </Resizable>
  );
};

export default CodeCell;
