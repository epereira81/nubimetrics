import React from "react";
import {
  Box,
  Button,
  Card,
  Image,
  Link,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";
import Slider, { Settings } from "react-slick";

interface InfocardSliderProps {
  data: {
    title: string;
    subtitle: string;
    cta: {
      label: string;
      link: string;
    };
    items: {
      image: string;
      description: string;
      title: string;
      subtitle: string;
    }[];
  };
}

export const InfocardSlider: React.FC<InfocardSliderProps> = ({ data }) => {
  const {
    title,
    subtitle,
    cta: { label, link },
    items,
  } = data;

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
        <Text color={"#8089A2"} fontSize={["18px", "24px"]}>
          {subtitle}
        </Text>
        <Link
          href={link}
          w={"100%"}
          bg={"linear-gradient(#493AEA, #A222FF)"}
          h={"54px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"25px"}
          color={"#fff"}
          fontWeight={"500"}
          borderRadius={"7px"}
          maxW="730px"
          alignSelf={"center"}
        >
          {label}
        </Link>
      </Stack>

      <Box pb={10} maxW={["", "container.xl"]} mx={["", "auto"]} w={"100%"}>
        <Slider {...settings} className="infocardSlider">
          {items.map((item) => (
            <Card
              key={item.title}
              bg={"linear-gradient(#6A5FE5, #945DFD)"}
              borderRadius={"25px"}
              p={[4, 16]}
            >
              <Stack
                alignItems={"center"}
                textAlign={["center", "left"]}
                spacing={[0, 20]}
                direction={["column", "row"]}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={["113px", "197px"]}
                />
                <Box>
                  <Text color={"#fff"} py={4} maxW="800px" fontSize={["16px", "18px"]}>
                    {item.description}
                  </Text>
                  <Text color={"#fff"} fontSize={["22px", "25px"]} fontWeight={"600"}>
                    {item.title}
                  </Text>
                  <Text
                    color={"#fff"}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    mt={0}
                  >
                    {item.subtitle}
                  </Text>
                </Box>
              </Stack>
            </Card>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};
