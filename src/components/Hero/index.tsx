import { Box, Text, Stack, Link, Container, Flex, Img } from "@chakra-ui/react";
import React, { useState } from "react";

type Banners = {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}[];

const HeroCard = ({ banners }: { banners: Banners }) => {
  const [active, setActive] = useState(0);

  return (
    <Flex gap={5} pl={[5, 0]} w="max-content" py={[10, 0]}>
      {banners.map((item, index) => (
        <Link key={item.title} href={item.link}>
          <Img
            src={item.image}
            w={["332px", `${active === index ? "400px" : "200px"}`]}
            h={["", "540px"]}
            objectFit="cover"
            objectPosition={"left"}
            borderRadius="30px"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(0)}
            transition={"width .3s ease"}
          />
        </Link>
      ))}
    </Flex>
  );
};

interface Hero {
  data: {
    title: string;
    subtitle: string;
    cta: {
      text: string;
      link: string;
    };
    banners: {
      image: string;
      title: string;
      subtitle: string;
      link: string;
    }[];
  };
}

export const Hero = ({ data }: Hero) => {
  const {
    title,
    subtitle,
    cta: { link: ctaLink, text: ctaText },
    banners,
  } = data;
  return (
    <Stack direction={["column", "row"]} alignItems={"center"}>
      <Container
        maxW={"container.xl"}
        textAlign={["center", "left"]}
        maxWidth={["", "400px"]}
      >
        <Text
          fontSize={["35px", "40px"]}
          color="#6C5FED"
          fontWeight={"600"}
          lineHeight={1}
        >
          {title}
        </Text>
        <Text my={5}>{subtitle}</Text>
        <Link href={ctaLink} color="brand.800" fontWeight={"800"}>
          {ctaText}
        </Link>
      </Container>

      <Box
        overflowY={["scroll", "hidden"]}
        overflowX={["scroll", "hidden"]}
        w={"100%"}
        flex="1"
      >
        <HeroCard banners={banners} />
      </Box>
    </Stack>
  );
};
