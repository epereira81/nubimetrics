import { Img, Link } from "@chakra-ui/react";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <Img src="/images/icons/logo.png" w="150px" h="auto" />
    </Link>
  );
};
