import { Img, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <ChakraLink as={Link} href="/">
      <Img src="/images/icons/logo.png" w="150px" h="auto" />
    </ChakraLink>
  );
};
