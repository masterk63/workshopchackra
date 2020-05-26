import React from "react";
import Conversation from "../Conversation";
import { Stack, Avatar, Box, Text, Badge, Button } from "@chakra-ui/core";
import CommitLine from "../CommitLine";
import { MdCheck, MdPersonAdd, MdMergeType } from "react-icons/md";
import { DiGitBranch } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import VerticalLine from "../VerticalLine";

export default function TabConversation() {
  return (
    <>
      <Conversation
        avatarUrl={"https://bit.ly/dan-abramov"}
        enabledCommitDescription
        extraLine
      >
        <CommitLine
          icon={MdPersonAdd}
          text={
            <Stack isInline>
              <Text fontWeight="bold">Diego Salinas</Text>
              <Text>added 2 commits 21 hours ago</Text>
            </Stack>
          }
          backgroundColor="gray.200"
        />
        <VerticalLine mt="1" />
        <CommitLine
          icon={DiGitBranch}
          text={
            <Stack isInline align="center">
              <Box as={AiFillGithub} size="10" rounded="50%" p="2" />
              <Text>Add shopify to iOS landing on mobile</Text>
            </Stack>
          }
          rigthSection={<Text>8adcb53</Text>}
        />
        <VerticalLine mt="1" />
        <CommitLine
          icon={DiGitBranch}
          text={
            <Stack isInline align="center">
              <Box as={AiFillGithub} size="10" rounded="50%" p="2" />
              <Text>Fix mobile landing resolution center</Text>
            </Stack>
          }
          rigthSection={<Text>8adcb53</Text>}
        />
        <VerticalLine mt="1" />
        <CommitLine
          icon={MdMergeType}
          text={
            <Stack isInline align="center">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="xs"
              />
              <Text>
                <b>Miru-hh </b>request review from <b>RenzoMuzi</b> and{" "}
                <b>pgarin</b> 4 hours ago
              </Text>
            </Stack>
          }
          backgroundColor="gray.200"
        />
      </Conversation>
      <Conversation avatarUrl={"https://bit.ly/kent-c-dodds"}>
        <CommitLine
          icon={MdCheck}
          text={
            <Stack isInline align="center">
              <Text>
                <b>RenzoMuzi</b> approved this changes 4 hours ago
              </Text>
            </Stack>
          }
          backgroundColor="delta.400"
          rigthSection={
            <Button rounded="md" backgroundColor="delta.600" color="white">
              View changes
            </Button>
          }
        />
        <VerticalLine mt="1" />
        <CommitLine
          icon={DiGitBranch}
          text={
            <Stack isInline align="center">
              <Text>
                <b>Mirau-hh</b> merged commit <b>f8af9e7</b> into
              </Text>
              <Badge>develop</Badge>
              <Text>2 hour ago</Text>
            </Stack>
          }
          backgroundColor="beta.400"
          rigthSection={
            <Button rounded="md" backgroundColor="delta.600" color="white">
              Revert
            </Button>
          }
        />
      </Conversation>
    </>
  );
}
