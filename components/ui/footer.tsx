import { Box, Container } from "@mui/material";
import { FC } from "react";

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <Box component="footer" className={props.className}>
      <Container>
        <Box component="div" className="h-28 flex items-center justify-center">
          Copy rights reserved @ 2023
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
