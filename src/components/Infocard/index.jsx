import React from "react";
import { Flex, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";

export const Infocard = ({ data }) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      direction={["column", "row"]}
    >
      <Stack
        spacing={[5, 10]}
        maxW={"500px"}
        textAlign={["center", "left"]}
        mb={[5, 0]}
      >
        <Text
          fontSize={["48px", "60px"]}
          color={"#6C5FED"}
          fontWeight={"600"}
          lineHeight={"1"}
        >
          {data.title}
        </Text>
        <Text
          fontSize={["18px", "24px"]}
          color={"#707070"}
          fontWeight={"600"}
          lineHeight={"1"}
        >
          {data.subtitle}
        </Text>
        <Link
          href={data.cta.link}
          fontSize={["20px", "28px"]}
          color={"#5DA6F6"}
        >
          {data.cta.label}
        </Link>
      </Stack>
      <Image src={data.imageUrl} alt="" />
    </Flex>
  );
};
