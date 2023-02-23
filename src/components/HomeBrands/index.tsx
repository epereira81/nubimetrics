import { Flex, Img, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

interface HomeBrandsProps {
  data: {
    title: string;
    brands: {
      img: string;
    }[];
  };
}

export const HomeBrands = ({ data }: HomeBrandsProps) => {
  return (
    <Stack spacing={10}>
      <Text
        textAlign={"center"}
        fontSize="30px"
        fontWeight={"600"}
        color="brand.800"
      >
        {data.title}
      </Text>
      <Wrap justify="center">
        {data.brands.map((item) => (
          <WrapItem key={item.img}>
            <Img src={item.img} />
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};
