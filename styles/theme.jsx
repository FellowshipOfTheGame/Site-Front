import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1E2B50"
    },
    secondary: {
      main: "#324789"
    },
    global: {
      white: "#FFF",
      black: "#000"
    }
  },
  typography: {
    h1: {
      fontSize: "4.125rem"
    },
    h2: {
      fontSize: "3.31rem",
      fontWeight: "400"
    },
    h3: {
      fontSize: "1.625rem"
    },
    //Navigation Button variant
    h6: {
      fontSize: "1.75rem",
      fontWeight: "400"
    },
    subtitle1: {
      fontSize: "1.375rem"
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
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
