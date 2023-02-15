import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export interface InfocardTabProps {
  data: {
    tabtitle: string;
    title: string;
    list: {
      title: string;
      subtitle: string;
      image: string;
    }[];
  }[];
}

export const InfocardTab = ({ data }: InfocardTabProps) => {
  return (
    <Box>
      <Text
        fontSize={["30px", "40px"]}
        color={"#000"}
        textAlign={"center"}
        my={16}
        fontWeight={"600"}
        maxW="700px"
        mx="auto"
      >
        Incorpora información para potenciar tu negocio online_
      </Text>

      <Box display={["none", "block"]}>
        <Desktop data={data} />
      </Box>
      <Box display={["block", "none"]}>
        <Mobile data={data} />
      </Box>
    </Box>
  );
};
