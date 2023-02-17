import React from "react";

import { Type2 } from "./type2";
import { Type1 } from "./type1";

export const InfocardSlider = ({ data, type }) => {
  if (type === "2") {
    return <Type2 data={data} />;
  }

  return <Type1 data={data} />;
};
