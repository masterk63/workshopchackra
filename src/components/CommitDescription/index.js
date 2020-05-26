import React from "react";
import { Box, Stack, Text, IconButton } from "@chakra-ui/core";
import { MdTagFaces } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";

export default function CommitDescription() {
  return (
    <Box borderWidth="1px" borderColor="alfa.500">
      <Stack
        isInline
        align="center"
        justifyContent="space-between"
        px="2"
        borderBottom="1px"
        borderBottomColor="alfa.500"
      >
        <Stack isInline>
          <Text fontSize="md" fontWeight="bold">
            Mirau-hh
          </Text>
          <Text fontSize="md">comment 3 hour ago</Text>
        </Stack>
        <Stack isInline>
          <IconButton
            variant="clear"
            variantColor="teal"
            aria-label="Call Sage"
            fontSize="md"
            icon={MdTagFaces}
          />
          <IconButton
            variant="clear"
            variantColor="teal"
            aria-label="Call Sage"
            fontSize="md"
            icon={FaEllipsisH}
          />
        </Stack>
      </Stack>
      <Box p="2">
        <Text fontStyle="italic">No description provide.</Text>
      </Box>
    </Box>
  );
}
