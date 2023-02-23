import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Img,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { data } from "@/utils/data";
import { useScroll } from "react-use";
import { DrawerMenu } from "@/components/DrawerMenu";
import { Logo } from "@/components/Logo";
import { FaAngleDown } from "react-icons/fa";

interface HeaderProps {
  data: {
    label: string;
    link: string;
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
            {data.map((item) => (
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
            <DrawerMenu data={data} />
          </Box>

          <Box display={["none", "block"]}>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                Language
              </MenuButton>
              <MenuList>
                <Link
                  display={"block"}
                  padding={2}
                  _hover={{ bg: "#fafafa" }}
                  href="/en"
                >
                  EN
                </Link>
                <Link
                  display={"block"}
                  padding={2}
                  _hover={{ bg: "#fafafa" }}
                  href="/"
                >
                  ES
                </Link>
                <Link
                  display={"block"}
                  padding={2}
                  _hover={{ bg: "#fafafa" }}
                  href="/br"
                >
                  PT-BR
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
