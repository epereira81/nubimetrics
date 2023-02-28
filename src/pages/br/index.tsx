import Head from "next/head";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Box, Container, Flex } from "@chakra-ui/react";
import { HomeBrands } from "@/components/HomeBrands";
import { VideoModal } from "@/components/VideoModal";
import { InfoCardList } from "@/components/InfocardList";
import { InfocardTab } from "@/components/InfocardTab";
import { data } from "@/utils/data";
import { InfocardSlider } from "@/components/InfocardSlider";
import { InfoCardNoImage } from "@/components/InfoCardNoImage";

export default function Home() {
  const {
    languages: {
      br: { siteSettings, home, menu, menuFooter },
    },
  } = data;

  return (
    <Box bgGradient={"linear(to-r, white, #6a5fe53b)"}>
      <Head>
        <title>{siteSettings.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout data={{ menu, menuFooter }}>
        <Box maxW={["", "container.xl"]} mx="auto" p={[0, 4]} my={16}>
          <Hero data={home.hero} />
        </Box>

        <Container maxW={"container.xl"}>
          <HomeBrands data={home.homeBrands} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <Flex justify={"center"}>
            <VideoModal data={home.videoModal} />
          </Flex>
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <InfoCardList data={home.infoCardList} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <InfocardTab data={home.infoCardTab} />
        </Container>

        <InfocardSlider data={home.infoCardSlider1} type={"1"} />

        <InfocardSlider data={home.infoCardSlider2} type={"2"} />

        <InfoCardNoImage data={home.infoCardOptions} maxCtaWidth={"280px"} />
      </Layout>
    </Box>
  );
}
