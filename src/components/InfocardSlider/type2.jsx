import React from "react";
import { Box, Card, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";

export const Type2 = ({ data }) => {
  const { title, subtitle, items } = data;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Stack spacing={7} my={16} alignItems="center">
      <Stack
        maxW={"container.xl"}
        mx="auto"
        w={"100%"}
        px={4}
        textAlign={"center"}
        spacing={7}
      >
        <Text
          fontSize={["30px", "35px"]}
          fontWeight={"600"}
          lineHeight={"1.3"}
          color={"#151923"}
        >
          {title}
        </Text>
        <Text
          color={"#8089A2"}
          fontSize={["18px", "24px"]}
          maxW={"800px"}
          alignSelf={"center"}
        >
          {subtitle}
        </Text>
      </Stack>

      <Box
        pb={10}
        maxW={["", "container.xl"]}
        mx={["", "auto"]}
        w={"100%"}
        h={"max-content"}
        overflowX={["hidden", "unset"]}
      >
        <Slider {...settings} className="infocardSlider">
          {items.map((item) => (
            <Box
              key={item.title}
              bg={`url(${item.image}) no-repeat center`}
              backgroundSize={"cover"}
              height={"290px"}
              borderRadius={"25px"}
              p={7}
              display={"flex !important"}
              flexDirection={"column"}
              justifyContent={"flex-end"}
            >
              <Text color={"#fff"} fontWeight={"600"} fontSize={"21px"}>
                {item.title}
              </Text>
              <Text
                color={"#fff"}
                py={2}
                maxW="800px"
                fontSize={"18px"}
                lineHeight={1}
              >
                {item.description}
              </Text>
              <Link href={item.cta.link} color={"#7EC9F3"} fontSize={"18px"}>
                {item.cta.label}
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};
