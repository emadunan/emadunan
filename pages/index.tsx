import { FC } from "react";
import { Box } from "@mui/material";
import CellList from "../components/editor/cell-list";

const Home: FC = () => {
  return (
    <Box component="div">
      <CellList />
    </Box>
  );
};

export default Home;
