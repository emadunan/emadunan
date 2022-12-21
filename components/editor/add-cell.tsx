import { Box, Button, Divider } from "@mui/material";
import { FC } from "react";
import { useActions } from "../../hooks/use-actions";

interface AddCellProps {
  prevCellId: string | null;
  className?: string;
}

const AddCell: FC<AddCellProps> = ({ prevCellId, className }) => {
  const { inserCellAfter } = useActions();
  return (
    <Box component="div" className={className}>
      <Divider>
        <Button variant="outlined" onClick={() => inserCellAfter(prevCellId, "code")} className="mx-4">Add Code</Button>
        <Button variant="outlined" onClick={() => inserCellAfter(prevCellId, "text")} className="mx-4">Add Text</Button>
      </Divider>
    </Box>
  );
}

export default AddCell;