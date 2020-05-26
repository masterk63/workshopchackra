import React from "react";
import PropTypes from "prop-types";
import { CSSReset, ColorModeProvider, ThemeProvider } from "@chakra-ui/core";
import theme from "../../theme";

const ChakraThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

ChakraThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChakraThemeProvider;
