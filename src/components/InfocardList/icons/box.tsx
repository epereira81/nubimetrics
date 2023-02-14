import { Image } from "@chakra-ui/react";
import React from "react";

export const BoxIcon = ({
  iconType,
  color
}: {
  color: string;
  iconType: number;
}) => {
  return <Image src={`/images/home/icon${iconType}${color}.svg`} alt="icon" />;
};
