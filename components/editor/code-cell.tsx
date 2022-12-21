import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler/index";
import Resizable from "./resizable";
import { Cell } from "../../state";
import { useActions } from "../../hooks/use-actions";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: FC<CodeCellProps> = ({ cell }) => {
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <Box component="div" className="h-full flex flex-row">
        <Resizable direction="horizontal">
          <CodeEditor onChange={(value) => updateCell(cell.id, value)} />
        </Resizable>
        <Preview code={code} err={err} />
      </Box>
    </Resizable>
  );
};

export default CodeCell;
