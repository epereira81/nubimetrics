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

export default function VendedorNovato() {
  const {
    languages: {
      br: { siteSettings, vendedorNovato, menu, menuFooter },
    },
  } = data;

  return (
    <Box bgGradient={"linear(to-r, white, #6a5fe53b)"}>
      <Head>
        <title>{siteSettings.title} - Vendedor Novato</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout data={{ menu, menuFooter }}>
        <Container maxW={"container.xl"} my={16}>
          <Infocard data={vendedorNovato.hero} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <InfoCardList data={vendedorNovato.infoCardList} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <InfocardTab data={vendedorNovato.infoCardTab} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <ListInfoItems data={vendedorNovato.listInfoItems} />
        </Container>

        <Container maxW={"container.xl"} my={16}>
          <CardType1 data={vendedorNovato.card} />
        </Container>

        <InfocardSlider data={vendedorNovato.infoCardSlider2} type={"2"} />

        <InfoCardNoImage
          data={vendedorNovato.infoCardOptions}
          maxCtaWidth={"550px"}
        />

        <Container maxW={"container.xl"} my={16}>
          <AccordionList data={vendedorNovato.faq} />
        </Container>
      </Layout>
    </Box>
  );
}
