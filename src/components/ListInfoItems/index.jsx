import React from "react";
import { Stack, Text, Wrap } from "@chakra-ui/react";

export const ListInfoItems = ({ data }) => {
  return (
    <>
      <Stack spacing={5}>
        <Text
          fontSize={["30px", "40px"]}
          fontWeight={"600"}
          lineHeight={"1"}
          color={"#151923"}
          textAlign={"center"}
        >
          {data.title}
        </Text>
        <Text
          fontSize={["18px"]}
          lineHeight={"1"}
          color={"#707070"}
          textAlign={"center"}
        >
          {data.subtitle}
        </Text>
      </Stack>
      <Wrap w={"100%"} maxW="900px" mx="auto" spacing={0} mt={16}>
        {data.items.map((item) => (
          <Stack key={item.title} w={["100%", "50%"]} p={5}>
            <Text
              fontSize={["22px","25px"]}
              fontWeight={"600"}
              lineHeight={"1"}
              color={"#6C5FED"}
            >
              {item.title}
            </Text>
            <Text fontSize={["16px", "18px"]} lineHeight={"1"} color={"#707070"}>
              {item.subtitle}
            </Text>
          </Stack>
        ))}
      </Wrap>
    </>
  );
};
