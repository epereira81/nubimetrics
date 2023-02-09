import React from "react";
import { Flex, HStack, Icon, Img, Link, Text } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialIcon = () => {
  return (
    <HStack spacing={5}>
      <Link
        href="/#"
        display="flex"
        alignItems={"center"}
        w="36px"
        h="36px"
        borderRadius="100%"
        bg="brand.900"
        justifyContent="center"
      >
        <Icon as={FaInstagram} color="#fff" />
      </Link>
      <Link
        href="/#"
        display="flex"
        alignItems={"center"}
        w="36px"
        h="36px"
        borderRadius="100%"
        bg="brand.900"
        justifyContent="center"
      >
        <Icon as={FaFacebookF} color="#fff" />
      </Link>
      <Link
        href="/#"
        display="flex"
        alignItems={"center"}
        w="36px"
        h="36px"
        borderRadius="100%"
        bg="brand.900"
        justifyContent="center"
      >
        <Icon as={FaYoutube} color="#fff" />
      </Link>
      <Link
        href="/#"
        display="flex"
        alignItems={"center"}
        w="36px"
        h="36px"
        borderRadius="100%"
        bg="brand.900"
        justifyContent="center"
      >
        <Icon as={FaLinkedinIn} color="#fff" />
      </Link>
      <Link
        href="/#"
        display="flex"
        alignItems={"center"}
        w="36px"
        h="36px"
        borderRadius="100%"
        bg="brand.900"
        justifyContent="center"
      >
        <Icon as={FaTwitter} color="#fff" />
      </Link>
    </HStack>
  );
};

export const Social = () => {
  return (
    <>
      <Text textAlign={["center", "left"]}>
        Siga-nos nas nossas redes sociais:
      </Text>
      <Flex justify={["center", "flex-start"]}>
        <SocialIcon />
      </Flex>
    </>
  );
};
