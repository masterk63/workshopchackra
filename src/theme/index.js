import { theme } from "@chakra-ui/core";
import colors from "./colors";

const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
  },
  colors: {
    black: theme.colors.black,
    blackAlpha: theme.colors.blackAlpha,
    white: theme.colors.white,
    whiteAlpha: theme.colors.whiteAlpha,
    transparent: theme.colors.transparent,
    gray: colors.alfa, // CSS Reset uses gray constant to define the light and dark modes
    ...colors,
  },
};

export default customTheme;
