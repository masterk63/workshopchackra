import React from "react";
import { Text, Stack } from "@chakra-ui/core";

export default function Title({ ...otherProps }) {
  return (
    <Stack isInline {...otherProps}>
      <Text fontSize="4xl">Landing maintence</Text>
      <Text fontSize="4xl" color="gray.500">
        #416
      </Text>
    </Stack>
  );
}
