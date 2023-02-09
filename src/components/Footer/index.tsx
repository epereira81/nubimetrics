import React from "react";
import { Box, Container, Divider, Flex, Stack } from "@chakra-ui/react";
import { Newsletter } from "../Newsletter";
import { Copy } from "../Copy";
import { Logo } from "../Logo";
import { Social } from "../Social";
import { MenuFooter } from "../MenuFooter";

export const Footer = () => {
  return (
    <Box as="footer">
      <Container maxW="container.xl">
        <Newsletter />
        <Divider mt={10} />
        <Stack
          direction={["column", "row"]}
          spacing={5}
          py={5}
          justifyContent="space-between"
          px={16}
        >
          <Stack spacing={5}>
            <Flex justify={["center", "flex-start"]}>
              <Logo />
            </Flex>
            <Social />
          </Stack>
          <Box>
            <MenuFooter />
          </Box>
        </Stack>
        <Divider />
        <Box p={5}>
          <Copy />
        </Box>
      </Container>
    </Box>
  );
};
