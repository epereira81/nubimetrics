import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from "@chakra-ui/react";

interface InfocardTabProps {
  data: {
    tabtitle: string;
    title: string;
    list: {
      title: string;
      subtitle: string;
      image: string;
    }[];
  }[];
}

export const InfocardTab = ({ data }: InfocardTabProps) => {
  return (
    <Tabs>
      <TabList>
        {data.map((item) => (
          <Tab key={item.tabtitle}>{item.tabtitle}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {data.map((item) => (
          <TabPanel key={item.tabtitle}>
            <Text>{item.title}</Text>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
