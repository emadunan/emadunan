import { useSelect } from "../../hooks/use-typed-selector";
import { Box } from "@mui/material";
import { FC, Fragment } from "react";
import { Cell } from "../../state";
import AddCell from "./add-cell";
import CellItem from "./cell-item";

interface CellListProps {

}

const CellList: FC<CellListProps> = () => {
  const cells: Cell[] = useSelect(({ cells: { order, data } }) => order.map((id) => data[id]));

  return (
    <Box component="div">
      <AddCell prevCellId={null} />
      {cells.map((cell: Cell) => (
        <Fragment key={cell.id}>
          <CellItem cell={cell} />
          <AddCell prevCellId={cell.id} />
        </Fragment>
      ))}
    </Box>
  );
}

export default CellList;