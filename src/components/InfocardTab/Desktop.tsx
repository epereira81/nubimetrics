import React, { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Stack,
  Flex,
  Box,
  Image,
  HStack,
} from "@chakra-ui/react";

type InnerTabsProps = {
  tabtitle: string;
  title: string;
  list: {
    title: string;
    subtitle: string;
    image: string;
  }[];
};

const InnerTabs = ({ list }: InnerTabsProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs onChange={(index) => setTabIndex(index)}>
      <HStack>
        <TabList border="none">
          <Stack>
            {list.map((item, index) => (
              <Tab key={item.title} border="none">
                <Flex w="100%">
                  <Box
                    width={"26px"}
                    minWidth={"26px"}
                    height={"26px"}
                    border="1px solid"
                    borderColor={"brand.700"}
                    borderRadius={"100%"}
                    bg={index === tabIndex ? "brand.700" : "transparent"}
                    mt={1}
                  />
                  <Box
                    ml={5}
                    fontSize={"25px"}
                    fontWeight={"600"}
                    textAlign="left"
                    color={index === tabIndex ? "brand.900" : "#000"}
                  >
                    {item.title} <br />
                    {index === tabIndex && (
                      <Text
                        fontSize={"18px"}
                        color="brand.600"
                        fontWeight={"400"}
                      >
                        {item.subtitle}
                      </Text>
                    )}
                  </Box>
                </Flex>
              </Tab>
            ))}
          </Stack>
        </TabList>

        <TabPanels>
          {list.map((item) => (
            <TabPanel key={item.title}>
              <Image src={item.image} alt={item.title} borderRadius={"20px"} />
            </TabPanel>
          ))}
        </TabPanels>
      </HStack>
    </Tabs>
  );
};

export const Desktop = ({ data }: any) => {
  return (
    <Tabs align="center">
      <TabList borderColor="#8E2EED" borderBottomWidth="1px">
        {data.map((item: any) => (
          <Tab
            key={item.tabtitle}
            fontSize={"20px"}
            color={"#8089A2"}
            pb={5}
            _selected={{
              color: "#8E2EED",
              borderColor: "#8E2EED",
              fontWeight: "600",
              borderBottomWidth: "4px",
            }}
          >
            {item.tabtitle}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {data.map((item: any) => (
          <TabPanel key={item.tabtitle}>
            <Text
              fontSize={"30px"}
              color="brand.600"
              maxW="600px"
              my={7}
              fontWeight={"500"}
            >
              {item.title}
            </Text>

            <InnerTabs {...item} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
