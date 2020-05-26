import React from "react";
import { Flex, Box, Text } from "@chakra-ui/core";

export default function Badge({ text, icon }) {
  return (
    <Flex bg="beta.500" rounded="md" p="1" align="center">
      <Box as={icon} color="white" />
      <Text ml="1" color="white">
        {text}
      </Text>
    </Flex>
  );
}
