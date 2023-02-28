import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

type Cards = {
  data: {
    tabtitle: string;
    title: string;
    list: {
      title: string;
      subtitle: string;
      image: string;
    }[];
  }[];
};

export const Mobile = ({ data }: Cards) => {
  return (
    <Stack>
      <Accordion allowToggle defaultIndex={[0]}>
        {data.map((item) => (
          <AccordionItem key={item.title}>
            <AccordionButton>
              <AccordionIcon />
              <Text
                flex="1"
                textAlign="left"
                fontSize={"22px"}
                color="brand.800"
                fontWeight={"500"}
                ml={3}
              >
                {item.tabtitle}
              </Text>
            </AccordionButton>

            <AccordionPanel pb={4}>
              {item.list.map((item) => (
                <List key={item.title} my={5}>
                  <ListItem>
                    <Flex>
                      <Box
                        width={"14px"}
                        minWidth={"14px"}
                        height={"14px"}
                        border="1px solid"
                        borderColor={"brand.700"}
                        borderRadius={"100%"}
                        bg={"brand.700"}
                        mt={2}
                        mr={4}
                      />
                      <Text fontSize={"20px"} color={"brand.900"}>
                        {item.title}
                      </Text>
                    </Flex>

                    <Text mt={4} pl={7}>
                      {item.subtitle}
                    </Text>
                  </ListItem>
                </List>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  );
};
