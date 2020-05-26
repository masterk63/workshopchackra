import React from "react";
import Header from "../Header";
import { Flex } from "@chakra-ui/core";

export default function Container({ children }) {
  return (
    <>
      <Header />
      <Flex
        mt="50px"
        height="calc(100vh - 50px)"
        justifyContent="center"
        align="center"
      >
        <Flex height="700px" width="4xl" p="4">
          {children}
        </Flex>
      </Flex>
    </>
  );
}
