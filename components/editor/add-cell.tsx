import { Box, Button, Divider } from "@mui/material";
import { FC } from "react";
import { useActions } from "../../hooks/use-actions";

interface AddCellProps {
  prevCellId: string | null;
}

const AddCell: FC<AddCellProps> = ({ prevCellId }) => {
  const { inserCellAfter } = useActions();
  return (
    <Box component="div">
      <Divider>
        <Button variant="outlined" onClick={() => inserCellAfter(prevCellId, "code")} className="mx-4">Add Code</Button>
        <Button variant="outlined" onClick={() => inserCellAfter(prevCellId, "text")} className="mx-4">Add Text</Button>
      </Divider>
    </Box>
  );
}

export default AddCell;