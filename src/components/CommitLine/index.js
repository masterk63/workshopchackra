import React from "react";
import { Stack, Box } from "@chakra-ui/core";

export default function CommitLine({
  icon,
  text,
  backgroundColor,
  rigthSection,
}) {
  const style = backgroundColor ? { backgroundColor, color: "white" } : {};
  return (
    <Stack justifyContent="space-between" isInline align="center">
      <Stack isInline align="center">
        <Box as={icon} size="10" rounded="50%" p="2" {...style} />
        {text}
      </Stack>
      <Stack>{rigthSection}</Stack>
    </Stack>
  );
}
