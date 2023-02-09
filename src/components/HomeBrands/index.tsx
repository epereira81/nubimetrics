import { Flex, Img, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

export const HomeBrands = () => {
  return (
    <Stack spacing={10}>
      <Text textAlign={"center"} fontSize="3xl" fontWeight={"800"} color="brand.900">Confían en nosotros</Text>
      <Wrap justify="center">
        <WrapItem>
          <Img src="/images/icons/intel.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/quilmes.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/goodyear.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/samsung.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/disney.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/puma.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/hp.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/pernoid-ricard.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/dexter.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/fravega.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/nanoshop.png" />
        </WrapItem>

        <WrapItem>
          <Img src="/images/icons/farmacity.png" />
        </WrapItem>
      </Wrap>
    </Stack>
  );
};
