import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const AccordionList = ({ data }) => {
  return (
    <Stack>
      <Text
        textAlign={"center"}
        fontSize={["30px","40px"]}
        fontWeight={["600"]}
        mb={[5]}
      >
        {data.title}
      </Text>

      <Accordion allowToggle>
        {data.items.map((item, index) => (
          <AccordionItem key={item.title} border={0}>
            <h2>
              <AccordionButton bg={index % 2 === 0 ? "" : "#F2F0FF"} py={3}>
                <AccordionIcon color={"#6C5FED"} mr={5} />
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color={"#707070"}
                  fontSize={["18px", "22px"]}
                >
                  {item.title}
                </Box>
              </AccordionButton>
            </h2>

            <AccordionPanel
              pb={4}
              pl={14}
              bg={index % 2 === 0 ? "" : "#F2F0FF"}
              color={"#707070"}
              fontSize={["16px", "18px"]}
            >
              {item.content}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  );
};
