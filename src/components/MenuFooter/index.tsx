import { data } from "@/utils/data";
import { Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface MenuFooterProps {
  data: {
    title: string;
    items: {
      label: string;
      link: string;
    }[];
  }[];
}

export const MenuFooter = ({ data }: MenuFooterProps) => {
  return (
    <Stack spacing={[10, 20]} direction={["column", "row"]}>
      {data.map((item) => (
        <Stack key={item.title} as="h3">
          <Text
            fontSize="2xl"
            textAlign={["center", "left"]}
            color="brand.800"
            fontWeight={"800"}
          >
            {item.title}
          </Text>

          <Stack justify={"center"} alignItems={["center", "flex-start"]}>
            {item.items.map((item) => (
              <Link
                href={item.link}
                key={item.label}
                color="brand.700"
                fontWeight={"600"}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
