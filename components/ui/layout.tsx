import type { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";

import Header from "./header";
import Footer from "./footer";
// import SiteTitle from "./site-title";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <Box component="div" className="bg-secondary min-h-screen flex flex-col">
      <Container>
        <Box component="div" className="h-20" />
        <Header className="sticky top-0 z-10" />
        <Box component="main" className="my-4">
          {props.children}
        </Box>
      </Container>
      <Footer className="bg-primary text-secondary mt-auto" />
    </Box>
  );
};

export default Layout;
