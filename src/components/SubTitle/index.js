import React from "react";
import Badge from "../Badge";
import { Stack, Text, Link } from "@chakra-ui/core";
import { DiGitBranch } from "react-icons/di";
import File from "../File/index";

export default function SubTitle({ ...otherProps }) {
  return (
    <Stack isInline {...otherProps} align="center">
      <Badge text="Merged" icon={DiGitBranch} />
      <Text fontSize="sm" ml="1">
        Mirau-hh merged 2 commits into{" "}
        <Link color="alfa.500" mx="1">
          develop
        </Link>
        from{" "}
        <Link color="alfa.500" mx="1">
          landing-maintenance
        </Link>
      </Text>
      <File />
    </Stack>
  );
}
