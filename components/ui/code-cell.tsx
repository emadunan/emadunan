import { FC, useState } from "react";
import { Box, Button } from "@mui/material";

import CodeEditor from "../editor/code-editor";
import Preview from "../editor/preview";
import bundle from "../bundler/index";

const CodeCell: FC = () => {
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const onSubmitBtn = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Box component="div">
      <CodeEditor onChange={(value) => setInput(value)} />
      <Button onClick={onSubmitBtn}>RUN</Button>
      <Preview code={code}/>
    </Box>
  );
};

export default CodeCell;
