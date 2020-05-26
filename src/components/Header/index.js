import React from "react";
import { Flex, useColorMode } from "@chakra-ui/core";
import themeColors from "../../utils/colorUtils";
import ThemeSwtich from "../ThemeSwtich/ThemeSwtich";

export default function Header() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      justify="flex-end"
      align="center"
      padding="1"
      position="fixed"
      top="0"
      left="0"
      width="full"
      bg={themeColors[colorMode].background}
      borderBottomWidth={1}
    >
      <ThemeSwtich />
    </Flex>
  );
}
