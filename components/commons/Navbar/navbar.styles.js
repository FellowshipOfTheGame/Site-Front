import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "96px"
  },
  desktopLogo: {
    height: "160px",
    width: "160px",
    position: "absolute",
    top: "0",
    boxShadow: "4px 4px 8px #000000"
  },
  mobileLogo: {
    height: "80px",
    width: "80px",
    position: "absolute",
    top: "0",
    right: "16px"
  },
  buttonsContainer: {
    margin: "0px auto",
    maxWidth: "660px"
  },
  mobileIcon: {
    fontSize: "2rem",
    color: "#FFF"
  },
  mobileMenu: {
    "& ul": {
      backgroundColor: theme.palette.colors.darkGray,
      border: `1px solid ${theme.palette.colors.gray}`,
      borderRadius: "0px",

      "& li": {
        width: "100px",
        paddingLeft: "12px"
      }
    }
  },
  desktop: {
    display: "none",
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      display: "block"
    }
  },
  mobile: {
    display: "block",
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      display: "none"
    }
  }
}));
