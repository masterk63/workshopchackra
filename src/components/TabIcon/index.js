import React from "react";
import { Tab, Box, Text } from "@chakra-ui/core";

const TabIcon = React.forwardRef((prop, ref) => {
  const { icon, count, children, ...otherProps } = prop;
  return (
    <Tab {...otherProps} ref={ref} flex="1">
      <Box as={icon} fontSize="xs" />
      <Text mx="2" textTransform="uppercase" fontSize="xs">
        {children}
      </Text>
      <Text fontSize="xs">{count}</Text>
    </Tab>
  );
});

export default TabIcon;
