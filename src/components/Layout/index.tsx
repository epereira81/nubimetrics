import React from "react";
import { Box } from "@chakra-ui/react";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  data: {
    menu: {
      label: string;
      link: string;
    }[];
    menuFooter: {
      title: string;
      items: {
        label: string;
        link: string;
      }[];
    }[];
  };
}

export const Layout = ({
  children,
  data: { menu, menuFooter },
}: LayoutProps) => {
  return (
    <>
      <Header data={menu} />
      <Box as="main">{children}</Box>
      <Footer data={menuFooter} />
    </>
  );
};
