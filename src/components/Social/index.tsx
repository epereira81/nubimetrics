import React from "react";
import { Flex, HStack, Icon, Img, Link, Text } from "@chakra-ui/react";
import { data } from "@/utils/data";
import * as icons from "react-icons/fa";

const SocialIcon = () => {
  return (
    <HStack spacing={5}>
      {data.social.map((item) => (
        <Link
          href={item.link}
          display="flex"
          alignItems={"center"}
          key={item.label}
          w="36px"
          h="36px"
          borderRadius="100%"
          bg="brand.900"
          justifyContent="center"
        >
          <Icon as={icons[item.icon]} color="#fff" />
        </Link>
      ))}
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
