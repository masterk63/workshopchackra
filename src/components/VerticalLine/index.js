import React from "react";
import { Divider } from "@chakra-ui/core";

export default function VerticalLine({ ...otherProps }) {
  return (
    <Divider
      orientation="vertical"
      borderColor="red.500"
      height="5"
      ml="5"
      {...otherProps}
    />
  );
}
