import React from "react";
import { Box, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/core";
import { BsFiles } from "react-icons/bs";
import TabIcon from "../TabIcon";
import TabConversation from "../TabConversation";

export default function CommitBody({ ...otherProps }) {
  return (
    <Box {...otherProps}>
      <Tabs>
        <TabList color="beta.500">
          <TabIcon icon={BsFiles} count={0}>
            conversation
          </TabIcon>
          <TabIcon icon={BsFiles} count={2}>
            commits
          </TabIcon>
          <TabIcon icon={BsFiles} count={0}>
            checks
          </TabIcon>
          <TabIcon icon={BsFiles} count={0}>
            files changed
          </TabIcon>
        </TabList>

        <TabPanels p="6">
          <TabPanel>
            <TabConversation />
          </TabPanel>
          <TabPanel>
            <p>commits</p>
          </TabPanel>
          <TabPanel>
            <p>checks</p>
          </TabPanel>
          <TabPanel>
            <p>files changed</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
