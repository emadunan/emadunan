import { Box, Button, IconButton } from "@mui/material";
import { FC } from "react";
import { useActions } from "../../hooks/use-actions";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CloseIcon from "@mui/icons-material/Close";

interface ActionBarProps {
  id: string;
}

const ActionBar: FC<ActionBarProps> = ({ id }) => {
  const { deleteCell, moveCell } = useActions();

  return (
    <Box component="div" className="top-0 right-0 absolute">
      <IconButton
        sx={{ color: "#fff" }}
        color="primary"
        size="small"
        onClick={() => moveCell(id, "up")}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <IconButton
        sx={{ color: "#fff" }}
        color="primary"
        size="small"
        onClick={() => moveCell(id, "down")}
      >
        <ArrowDownwardIcon />
      </IconButton>
      <IconButton sx={{ color: "#fff" }} size="small" onClick={() => deleteCell(id)}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default ActionBar;
