"use client";

import { Navbar } from "@emadunan/react-ui";

export default function NavbarBasic() {
  return (
    <Navbar>
      <a href="#" className="active">Home</a>
      <a href="#">Products</a>
      <a href="#">Pricing</a>
      <a href="#">Contact</a>
    </Navbar>
  );
}
