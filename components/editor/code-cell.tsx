import { FC, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { Cell } from "../../state";
import { useActions } from "../../hooks/use-actions";
import { useSelect } from "../../hooks/use-typed-selector";
import { useCumulativeCode } from "../../hooks/use-cumulative-code";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: FC<CodeCellProps> = ({ cell }) => {
  // const [input, setInput] = useState<string>("");
  // const [code, setCode] = useState<string>("");
  // const [err, setErr] = useState<string>("");

  const bundle = useSelect((state) => state.bundles[cell.id]);

  const cumulativeCode = useCumulativeCode(cell.id);

  const { updateCell, createBundle } = useActions();

  useEffect(() => {
    console.log(cumulativeCode);
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      // const output = await bundle(cell.content);
      // setCode(output.code);
      // setErr(output.err);

      createBundle(cell.id, cumulativeCode);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.id, cumulativeCode, createBundle]);

  return (
    <Resizable direction="vertical">
      <Box component="div" className="h-full flex flex-row">
        <Resizable direction="horizontal">
          <CodeEditor onChange={(value) => updateCell(cell.id, value)} />
        </Resizable>
        {!bundle || bundle.loading ? (
          <Box sx={{ margin: "auto" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Preview code={bundle.code} err={bundle.error} />
        )}
      </Box>
    </Resizable>
  );
};

export default CodeCell;
