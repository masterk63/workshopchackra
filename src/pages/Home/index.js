import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import { Stack } from "@chakra-ui/core";
import CommitBody from "../../components/CommitBody";

export default function Home() {
  return (
    <Container>
      <Stack width="100%">
        <Title />
        <SubTitle my="2" />
        <CommitBody mt="4"/>
      </Stack>
    </Container>
  );
}
