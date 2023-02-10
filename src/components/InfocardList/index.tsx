import React from "react";
import { Card, Image, List, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { data } from "@/utils/data";

export const InfoCardList = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Stack spacing={3} textAlign={"center"} mb={5}>
        <Text fontSize={"30px"} as={"h2"} fontWeight={"900"}>
          Toma decisiones inteligentes_
        </Text>
        <Text>
          Incorpora información en cada una de tus decisiones para optimizar el
          proceso de ventas en e-commerce.
        </Text>
      </Stack>

      {isDesktop ? (
        <>
        </>
      ) : (
        <Stack spacing={5}>
          {data.home.infoCardList.map((item) => (
            <Card key={item.tag} borderRadius="30px">
              <Stack textAlign={"center"} spacing={3}>
                <Stack textAlign={"center"} spacing={3} p={5}>
                  <Text color={"#707070"} fontSize="18px" fontWeight={"600"}>
                    {item.tag}
                  </Text>
                  <Text color={"brand.900"} fontSize="30px" fontWeight={"800"}>
                    {item.title}
                  </Text>
                  <Text color={"#8089A2"} fontSize="18px" fontWeight={"600"}>
                    {item.subtitle}
                  </Text>
                </Stack>

                <Image
                  src={item.image}
                  alt={item.title}
                  transform="scale(1.02)"
                />
              </Stack>
            </Card>
          ))}
        </Stack>
      )}
    </>
  );
};
