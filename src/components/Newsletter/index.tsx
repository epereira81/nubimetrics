import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Newsletter = () => {
  return (
    <Stack spacing="5" direction={["column", "row"]}>
      <Text
        textAlign={["center", "left"]}
        fontWeight="bold"
        color="brand.800"
        maxW={["", "340px"]}
      >
        Recibe contenido exclusivo y sigue todas las novedades del e-commerce.
      </Text>
      <Stack spacing="5" direction={["column", "row"]} flex="1">
        <Input
          size="lg"
          type="email"
          display="block"
          placeholder="Seu e-mail"
          bg="#fff"
        />
        <Button
          type="submit"
          size="lg"
          bg="brand.800"
          _hover={{ bg: "brand.800" }}
          color="#fff"
          w="100%"
          maxW={["", "200px"]}
        >
          Unirme
        </Button>
      </Stack>
    </Stack>
  );
};
