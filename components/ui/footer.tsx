import { Container } from "@mui/material";
import { FC } from "react";

interface FooterProps {
  className?: string;
}
 
const Footer: FC<FooterProps> = (props) => {
  return (
    <footer className={props.className}>
      <Container>
        <div className="h-28 flex items-center justify-center">
          Copy rights reserved @ 2023
        </div>
      </Container>
    </footer>
  );
}
 
export default Footer;