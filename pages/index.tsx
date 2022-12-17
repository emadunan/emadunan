import { FC } from "react";
import { Box } from "@mui/material";
import CodeCell from "../components/ui/code-cell";
import TextEditor from "../components/editor/text-editor";

const Home: FC = () => {
  return (
    <Box component="div">
      <TextEditor />
      {/* <CodeCell /> */}
    </Box>
  );
};

export default Home;
