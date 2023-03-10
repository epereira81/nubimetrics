import React from "react";
import { Box, Container, Divider, Flex, Stack } from "@chakra-ui/react";
import { Newsletter } from "@/components/Newsletter";
import { Copy } from "@/components/Copy";
import { Logo } from "@/components/Logo";
import { MenuFooter } from "@/components/MenuFooter";
import { Social } from "@/components/Social";

interface FooterProps {
  data: {
    title: string;
    items: {
      label: string;
      link: string;
    }[];
  }[];
}

export const Footer = ({ data }: FooterProps) => {
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
            <MenuFooter data={data} />
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
