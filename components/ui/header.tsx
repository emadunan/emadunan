import { Box } from "@mui/material";
import { FC } from "react";
import Navbar from "./navbar";

interface HeaderProps {
  className?: string;
}
 
const Header: FC<HeaderProps> = (props) => {
  return (
    <Box component="header" className={props.className}>
      <Navbar />
    </Box>
  );
}
 
export default Header;