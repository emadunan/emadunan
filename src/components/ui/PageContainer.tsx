import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default PageContainer;
