import { Box, Button, Divider } from "@mui/material";
import { FC } from "react";
import { useActions } from "../../hooks/use-actions";

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: FC<AddCellProps> = ({ nextCellId }) => {
  const { inserCellBefore } = useActions();
  return (
    <Box component="div">
      <Divider>
        <Button variant="outlined" onClick={() => inserCellBefore(nextCellId, "code")}>Add Code</Button>
        <Button variant="outlined" onClick={() => inserCellBefore(nextCellId, "text")}>Add Text</Button>
      </Divider>
    </Box>
  );
}

export default AddCell;