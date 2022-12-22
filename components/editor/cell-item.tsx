import { Box } from "@mui/material";
import { FC, Fragment } from "react";
import { Cell } from "../../state";
import ActionBar from "./action-bar";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";

interface CellItemProps {
  cell: Cell;
}

const CellItem: FC<CellItemProps> = ({ cell }) => {
  if (!cell.type) {
    return (
      <Box component="div" className="text-red-900">
        No cells
      </Box>
    );
  }

  let child: JSX.Element;

  if (cell.type === "code") {
    child = (
      <Fragment>
        <Box component="div" className="relative w-full h-8 bg-[#37414b]">
          <ActionBar id={cell.id} />
        </Box>
        <CodeCell cell={cell} />
      </Fragment>
    );
  } else {
    child = (
      <Fragment>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </Fragment>
    );
  }

  return (
    <Box component="div" className="relative my-8">
      {child}
    </Box>
  );
};

export default CellItem;
