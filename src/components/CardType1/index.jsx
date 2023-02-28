import {
  Box,
  Card,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const CardType1 = ({ data }) => {
  return (
    <Card
      bg={"linear-gradient(#6A5FE5, #945DFD)"}
      borderRadius={"25px"}
      p={[4, 16]}
    >
      <Stack spacing={7} direction={["column", "row"]}>
        <Text
          color={"#fff"}
          fontSize={["22px", "40px"]}
          fontWeight={"500"}
          lineHeight={1}
        >
          {data.title}
        </Text>
        <Text color={"#fff"} fontSize={["22px", "24px"]} fontWeight={"400"}>
          {data.subtitle}
        </Text>
      </Stack>

      <Divider my={10} />
      <Stack
        alignItems={"center"}
        textAlign={["center", "left"]}
        spacing={[0, 10]}
        direction={["column", "row"]}
      >
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={["113px", "160px"]}
          minW={["113px", "160px"]}
        />
        <Box>
          <Text color={"#fff"} fontSize={["22px", "22px"]} fontWeight={"400"}>
            {data.text1}
          </Text>
          <Text color={"#fff"} fontSize={"25px"} fontWeight={"500"} mt={7}>
            {data.text2}
          </Text>
          <Text color={"#fff"} fontSize={"18px"} fontWeight={"500"} mt={0}>
            {data.text3}
          </Text>
        </Box>
      </Stack>
    </Card>
  );
};
