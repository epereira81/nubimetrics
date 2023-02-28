import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import { data } from "@/utils/data";
import { Layout } from "@/components/Layout";
import { InfoCardList } from "@/components/InfocardList";
import { InfocardTab } from "@/components/InfocardTab";
import { InfocardSlider } from "@/components/InfocardSlider";
import { InfoCardNoImage } from "@/components/InfoCardNoImage";
import { Infocard } from "@/components/Infocard";
import { ListInfoItems } from "@/components/ListInfoItems";
import { CardType1 } from "@/components/CardType1";
import { AccordionList } from "@/components/AccordionList";

export default function ExperiencedSeller() {
  const {
    languages: {
      en: { siteSettings, vendedorExperiente, menu, menuFooter },
    },
  } = data;

  return (
    <Box bgGradient={"linear(to-r, white, #6a5fe53b)"}>
      <Head>
        <title>{siteSettings.title} - Experienced Seller</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout data={{ menu, menuFooter }}>
        <Container maxW={"container.xl"} my={16}>
          <Infocard data={vendedorExperiente.hero} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <InfoCardList data={vendedorExperiente.infoCardList} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <InfocardTab data={vendedorExperiente.infoCardTab} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <ListInfoItems data={vendedorExperiente.listInfoItems} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <CardType1 data={vendedorExperiente.card} />
        </Container>

        <InfocardSlider data={vendedorExperiente.infoCardSlider2} type={"2"} />

        <InfoCardNoImage
          data={vendedorExperiente.infoCardOptions}
          maxCtaWidth={"550px"}
        />

        <Container maxW={"container.xl"} my={16}>
          <AccordionList data={vendedorExperiente.faq} />
        </Container>
      </Layout>
    </Box>
  );
}
