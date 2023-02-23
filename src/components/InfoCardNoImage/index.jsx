import React from "react";
import { Box, Link, Container, Stack, Text } from "@chakra-ui/react";

export const InfoCardNoImage = ({ data }) => {
  return (
    <Box bg={"linear-gradient(#6A5FE5, #945DFD)"} py={10} my={16}>
      <Container maxW={"container.xl"} textAlign={"center"}>
        <Text fontSize={"30px"} color={"#fff"} fontWeight={"600"} lineHeight={1}>
          {data.title}
        </Text>

        <Text
          fontSize={"18px"}
          color={"#fff"}
          mt={5}
          mb={16}
          lineHeight={1}
          maxW={"700px"}
          alignSelf={"center"}
          mx={"auto"}
        >
          {data.subtitle}
        </Text>

        <Stack
          mt={5}
          spacing={["4", "16"]}
          direction={["column", "row"]}
          justify="center"
        >
          <Link
            border={"1px solid #fff"}
            color={"#fff"}
            py={3}
            maxW="280px"
            width={"100%"}
            alignSelf={"center"}
            borderRadius={"7px"}
            fontSize={"20px"}
            fontWeight={"600"}
            href={data.cta1.link}
          >
            {data.cta1.label}
          </Link>
          <Link
            border={"1px solid #fff"}
            color={"#fff"}
            py={3}
            maxW="280px"
            width={"100%"}
            alignSelf={"center"}
            borderRadius={"7px"}
            fontSize={"20px"}
            fontWeight={"600"}
            href={data.cta2.link}
          >
            {data.cta2.label}
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};
