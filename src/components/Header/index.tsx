import React from "react";
import {
  Box,
  Container,
  Flex,
  Img,
  Link,
  Icon,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header">
      <Container py="4">
        <Flex alignItems="center" justify="space-between">
          <Img src="/images/icons/logo.png" w="150px" h="auto" />

          <Link color="brand.900">Login</Link>

          <Flex as="button" h="auto" onClick={onOpen}>
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
                  <ListItem>
                    <Link>Produto</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Blog</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Academia</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Quem Somos</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Eventos</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Suporte</Link>
                  </ListItem>
                  <ListItem>
                    <Button bg="brand.900" color="#fff" fontWeight="600">Prueba Gratis</Button>
                  </ListItem>
                </List>
              </Box>
            </ModalContent>
          </Modal>
        </Flex>
      </Container>
    </Box>
  );
};
