import React from "react";
import { Flex, Stack, Avatar } from "@chakra-ui/core";
import CommitDescription from "../CommitDescription";
import VerticalLine from "../VerticalLine";

export default function Conversation({
  avatarUrl,
  enabledCommitDescription = false,
  extraLine = false,
  children,
}) {
  return (
    <Stack>
      <Flex>
        <Avatar name="Dan Abrahmov" src={avatarUrl} />
        <Stack flex="1" ml="6">
          {enabledCommitDescription && <CommitDescription />}
          {extraLine && <VerticalLine />}
          {children}
          {extraLine && <VerticalLine />}
        </Stack>
      </Flex>
    </Stack>
  );
}
