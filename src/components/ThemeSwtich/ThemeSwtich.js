import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/core';

const ThemeSwtich = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon = colorMode === 'dark' ? 'moon' : 'sun';

  return (
    <IconButton
      variant="ghost"
      variantColor="delta"
      aria-label="Call Sage"
      fontSize="xl"
      icon={icon}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeSwtich;
