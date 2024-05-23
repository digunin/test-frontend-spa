import { Theme, ThemeOptions, createTheme } from "@mui/material";

const mainThemeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
  },
};

export const mainTheme = createTheme(mainThemeOptions);
