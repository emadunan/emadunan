import { FC } from "react";
import Navbar from "./navbar";

interface HeaderProps {
  className?: string;
}
 
const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={props.className}>
      <Navbar />
    </header>
  );
}
 
export default Header;