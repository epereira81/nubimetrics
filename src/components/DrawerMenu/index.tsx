import { data } from "@/utils/data";
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
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { Social } from "../Social";

export const DrawerMenu = () => {
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
          <ModalCloseButton />
          <Box p="7" mt="5">
            <List spacing="3">
              {data.menu.map((item) => (
                <ListItem key={item.label}>
                  <Link href={item.link}>{item.label}</Link>
                </ListItem>
              ))}

              <ListItem>
                <Button
                  bg="brand.900"
                  _hover={{ bg: "brand.900" }}
                  color="#fff"
                  fontWeight="600"
                >
                  Prueba Gratis
                </Button>
              </ListItem>

              <Divider py={5} my={5} />

              <Social />
            </List>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
