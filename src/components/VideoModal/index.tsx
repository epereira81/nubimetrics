import React from "react";
import {
  AspectRatio,
  Button,
  Flex,
  Icon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { VscPlayCircle } from "react-icons/vsc";

export const VideoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant="link">
        <Flex alignItems={"center"}>
          <Icon
            as={VscPlayCircle}
            mr={2}
            width={"34px"}
            height={"34px"}
            color={"brand.900"}
          />
          <Text color={"brand.700"} fontWeight={"500"} fontSize={"20px"}>
            Mira cómo podemos ayudarte
          </Text>
        </Flex>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"3xl"}>
        <ModalOverlay />
        <ModalContent p={[8, 10]}>
          <ModalCloseButton />

          <AspectRatio maxW="950px" ratio={6 / 4}>
            <iframe
              width="950px"
              height="550px"
              src="https://www.youtube.com/embed/j2WOADJNtxU?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </ModalContent>
      </Modal>
    </>
  );
};
