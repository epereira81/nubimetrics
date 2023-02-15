import { data } from "@/utils/data";
import { Box, Text, Stack, Link, Container, Flex, Img } from "@chakra-ui/react";
import React from "react";

type Banners = {
  image: string;
  title: string;
  subtitle: string;
}[];

const HeroCard = ({ banners }: { banners: Banners }) => {
  return (
    <Flex gap={5} pl={[5, 0]} w="max-content" py={[10, 0]}>
      {banners.map((item, index) => (
        <Img
          src={item.image}
          key={item.title}
          w={["332px", `${index === 0 ? "400px" : "200px"}`]}
          h={["", "540px"]}
          objectFit="cover"
          objectPosition={"left"}
          borderRadius="30px"
        />
      ))}
    </Flex>
  );
};

export const Hero = () => {
  const {
    title,
    subtitle,
    cta: { link: ctaLink, text: ctaText },
    banners,
  } = data.home.hero;
  return (
    <Stack direction={["column", "row"]} alignItems={"center"}>
      <Container
        maxW={"container.xl"}
        textAlign={["center", "left"]}
        maxWidth={["", "400px"]}
      >
        <Text fontSize={["3xl", "40px"]} color="brand.800" fontWeight={"600"} lineHeight={"1"}>
          {title}
        </Text>
        <Text my={5}>{subtitle}</Text>
        <Link href={ctaLink} color="brand.900" fontWeight={"800"}>
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
