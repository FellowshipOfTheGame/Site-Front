import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const navbarHeight = "96px";

export const largePanelHeight = "800px";
export const smDownLargePanelHeight = "360px";
export const midPanelHeight = "600px";
export const smMidPanelHeight = "280px";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1E2B50"
    },
    secondary: {
      main: "#324789"
    },
    background: {
      main: "#222222"
    },
    colors: {
      white: "#FFF",
      black: "#000",
      gray: "#707070",
      darkGray: "#2b2b2b",
      bluishGray: "#2a3037"
    }
  },
  breakpoints: {
    values: {
      mobile: 420,
      tablet: 1024,
      notebook: 1366,
      desktop: 1920
    }
  },
  // Consider this variants for design system purposes only, not taking into account the semantic meaning from the tag names
  typography: {
    allVariants: {
      color: "#FFF"
    },
    h1: {
      fontSize: "5rem"
    },
    h2: {
      fontSize: "3.31rem",
      fontWeight: "400"
    },
    h3: {
      fontSize: "1.625rem"
    },
    h4: {
      fontSize: "1rem"
    },
    // Navigation Button variant
    h6: {
      fontSize: "1.75rem",
      fontWeight: "400"
    },
    subtitle1: {
      fontSize: "2.5rem"
    },
    button: {
      fontSize: "1.875rem",
      fontWeight: "400"
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: "96px"
      },
      colorDefault: {
        color: "#FFFFFF",
        background:
          "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(53,74,95,1) 67%, rgba(53,74,95,1) 100%)"
      }
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiListItem: {
      gutters: {
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    MuiLink: {
      underlineHover: {
        "&:hover": {
          textDecoration: "none"
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
