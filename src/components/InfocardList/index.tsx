import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { data } from "@/utils/data";
import { BoxIcon } from "./icons/box";

export const InfoCardList = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const [selectedSlider, setSelectedSlider] = useState(0);

  return (
    <>
      <Stack spacing={3} textAlign={"center"} mb={5} maxW={"600px"} mx="auto">
        <Text fontSize={["30px", "40px"]} as={"h2"} fontWeight={"900"}>
          Toma decisiones inteligentes_
        </Text>
        <Text fontSize={["18px"]} color="#707070">
          Incorpora información en cada una de tus decisiones para optimizar el
          proceso de ventas en e-commerce.
        </Text>
      </Stack>

      {isDesktop ? (
        <>
          <HStack
            position={"relative"}
            justify={"space-between"}
            alignItems={"center"}
            my={20}
            mb={32}
            spacing={0}
            maxW={"container.lg"}
            mx="auto"
          >
            {[0, 1, 2, 3, 4].map((position) => {
              let titles = [
                "Alíneate a las reglas del canal",
                "Amplía tu oferta",
                "Escoge las batallas que puedes ganar",
                "Conoce el ranking de vendedores",
                "Conquista la eficiencia",
              ];

              return (
                <React.Fragment key={position}>
                  <Button
                    width={"60px"}
                    minW="60px"
                    height={"60px"}
                    border={"1px solid #5DA6F6"}
                    bg={selectedSlider === position ? "#5DA6F6" : "transparent"}
                    _hover={{
                      bg:
                        selectedSlider === position ? "#5DA6F6" : "transparent",
                    }}
                    borderRadius={"100%"}
                    p={0}
                    m={0}
                    onClick={() => setSelectedSlider(position)}
                  >
                    <BoxIcon
                      color={`${
                        selectedSlider === position ? "White" : "Blue"
                      }`}
                      iconType={position}
                    />
                    {position === selectedSlider && (
                      <Text
                        position={"absolute"}
                        left={"50%"}
                        top="80px"
                        transform={"translate(-50%)"}
                        fontSize={"20px"}
                        fontWeight={"600"}
                        color={"brand.700"}
                        width="190px"
                        whiteSpace={"pre-wrap"}
                      >
                        {titles[position]}
                      </Text>
                    )}
                  </Button>

                  {position !== 4 && (
                    <Box
                      as="div"
                      width={"100%"}
                      display="block"
                      border="1px dashed #5DA6F6"
                    />
                  )}
                </React.Fragment>
              );
            })}
            <Flex alignItems={"center"} flex={"1"} m={0}></Flex>
          </HStack>

          {data.home.infoCardList.map((item, index) => {
            if (index !== selectedSlider) {
              return <></>;
            }

            return (
              <HStack textAlign={"center"} spacing={3} key={item.tag}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={"580px"}
                  borderRadius={"30px"}
                />

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
              </HStack>
            );
          })}
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
                  <Text color={"#6C5FED"} fontSize="30px" fontWeight={"800"}>
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
                  borderRadius={"30px"}
                />
              </Stack>
            </Card>
          ))}
        </Stack>
      )}
    </>
  );
};
