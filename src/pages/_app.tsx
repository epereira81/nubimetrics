import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { cssConfig } from "@/css/cssConfig";
import { Fonts } from "@/css/fonts";
import { SlickSliderCSS } from "@/css/SlickSliderCSS";

const theme = extendTheme(cssConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <SlickSliderCSS />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
