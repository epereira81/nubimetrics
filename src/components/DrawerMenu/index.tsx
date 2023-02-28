import {
  Flex,
  Icon,
  Modal,
  ModalContent,
  ModalCloseButton,
  List,
  ListItem,
  Button,
  Box,
  useDisclosure,
  Divider,
  Link as ChakraLink,
  MenuList,
  Menu,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Logo } from "../Logo";
import { Social } from "../Social";

interface DrawerMenuProps {
  data: {
    label: string;
    link: string;
    submenu?: {
      label: string;
      link: string;
    }[];
  }[];
}

export const DrawerMenu = ({ data }: DrawerMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex as="button" h="auto" onClick={onOpen} display={{ md: "none" }}>
        <Icon as={FiMenu} color="brand.800" w="26px" h="26px" />
      </Flex>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="full"
      >
        <ModalContent>
          <Box p="7">
            <Flex alignItems="center" justify="space-between" mb={10}>
              <Logo />

              <Flex alignItems="center" display={["none", "none", "flex"]}>
                {data.map((item) => (
                  <Link href={item.link} key={item.label}>
                    <ChakraLink mx={3}>{item.label}</ChakraLink>
                  </Link>
                ))}
              </Flex>

              <Flex alignItems="center" gap="7">
                <ChakraLink color="brand.900" href="/login">
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
                <ModalCloseButton
                  as={FiMenu}
                  color="brand.800"
                  w="26px"
                  h="26px"
                  position={"unset"}
                />
              </Box>
            </Flex>

            <List spacing="3">
              {data.map((item) => {
                if (item.submenu?.length) {
                  return (
                    <Menu isLazy key={item.label}>
                      <MenuButton fontSize={"21px"} color={"#232834"}>
                        {item.label}
                      </MenuButton>

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
                  <ListItem key={item.label}>
                    <Link href={item.link}>
                      <ChakraLink fontSize={"21px"} color={"#232834"}>
                        {item.label}
                      </ChakraLink>
                    </Link>
                  </ListItem>
                );
              })}

              <ListItem>
                <Button
                  bg="linear-gradient(#6A5FE5, #945DFD)"
                  _hover={{ bg: "linear-gradient(#6A5FE5, #945DFD)" }}
                  color="#fff"
                  fontWeight="600"
                  fontSize={"25px"}
                  py={7}
                >
                  Prueba Gratis
                </Button>
              </ListItem>

              <Divider py={5} my={5} />

              <Social />

              <Box>
                <Menu>
                  <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                    Language
                  </MenuButton>
                  <MenuList>
                    <ChakraLink
                      display={"block"}
                      padding={2}
                      _hover={{ bg: "#fafafa" }}
                      href="/en"
                    >
                      EN
                    </ChakraLink>
                    <ChakraLink
                      display={"block"}
                      padding={2}
                      _hover={{ bg: "#fafafa" }}
                      href="/"
                    >
                      ES
                    </ChakraLink>
                    <ChakraLink
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
            </List>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
