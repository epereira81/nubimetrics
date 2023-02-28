import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useScroll } from "react-use";
import { DrawerMenu } from "@/components/DrawerMenu";
import { Logo } from "@/components/Logo";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

interface HeaderProps {
  data: {
    label: string;
    link: string;
    submenu?: {
      label: string;
      link: string;
    }[];
  }[];
}

export const Header = ({ data }: HeaderProps) => {
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
            {data.map((item) => {
              if (item.submenu?.length) {
                return (
                  <Menu isLazy key={item.label}>
                    <MenuButton mx="3">{item.label}</MenuButton>

                    <MenuList>
                      {item.submenu.map((item) => (
                        <MenuItem key={item.label}>
                          <ChakraLink
                            as={Link}
                            href={item.link}
                            key={item.label}
                            mx="3"
                          >
                            {item.label}
                          </ChakraLink>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                );
              }

              return (
                <ChakraLink as={Link} href={item.link} key={item.label} mx="3">
                  {item.label}
                </ChakraLink>
              );
            })}
          </Flex>

          <Flex alignItems="center" gap="7">
            <ChakraLink as={Link} color="brand.900" href="/login">
              Login
            </ChakraLink>

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
            <DrawerMenu data={data} />
          </Box>

          <Box display={["none", "block"]}>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                Language
              </MenuButton>
              <MenuList>
                <ChakraLink
                  as={Link}
                  display={"block"}
                  padding={2}
                  _hover={{ bg: "#fafafa" }}
                  href="/en"
                >
                  EN
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  display={"block"}
                  padding={2}
                  _hover={{ bg: "#fafafa" }}
                  href="/"
                >
                  ES
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  display={"block"}
                  padding={2}
                  _hover={{ bg: "#fafafa" }}
                  href="/br"
                >
                  PT-BR
                </ChakraLink>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
