import React from "react";
import { Box, Button, Container, Flex, Img, Link } from "@chakra-ui/react";
import { data } from "@/utils/data";
import { useScroll } from "react-use";
import { DrawerMenu } from "@/components/DrawerMenu";
import { Logo } from "@/components/Logo";

export const Header = () => {
  const scrollRef = React.useRef(null);
  const { x, y } = useScroll(scrollRef);

  return (
    <Box
      as="header"
      position="sticky"
      zIndex={99}
      top="0"
      w="100%"
      bg={y === 0 ? "" : "blackAlpha.100"}
      backdropFilter="blur(10px)"
    >
      <Container py="4" maxW="container.xl">
        <Flex alignItems="center" justify="space-between">
          <Logo />

          <Flex alignItems="center" display={["none", "none", "flex"]}>
            {data.menu.map((item) => (
              <Link href={item.link} key={item.label} mx="3">
                {item.label}
              </Link>
            ))}
          </Flex>

          <Flex alignItems="center" gap="7">
            <Link color="brand.900" href="/login">
              Login
            </Link>

            <Box display={["none", "none", "flex"]}>
              <Button
                bg="brand.900"
                color="#fff"
                fontWeight="600"
                _hover={{ bg: "brand.900" }}
              >
                Prueba Gratis
              </Button>
            </Box>
          </Flex>

          <Box display={{ md: "none" }}>
            <DrawerMenu />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
