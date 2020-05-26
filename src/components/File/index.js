import React from "react";
import { Text, Box } from "@chakra-ui/core";
import { BsFiles } from "react-icons/bs";

export default function File() {
  return (
    <>
      <Box as={BsFiles} />
      <Text fontSize="sm" ml="1">
        2 hours ago
      </Text>
    </>
  );
}
