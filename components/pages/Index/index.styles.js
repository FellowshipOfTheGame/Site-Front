import { makeStyles } from "@material-ui/core";
import { navbarHeight } from "../../../styles/theme";

export const usePageStyles = makeStyles((theme) => ({
  subtitle: {
    display: "none",
    color: theme.palette.global.white,
    textAlign: "center",
    lineHeight: 1.2,
    [theme.breakpoints.up(theme.breakpoints.values.mobile)]: {
      display: "block"
    }
  },

  containerWithGeometry: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: `calc(100vh - ${navbarHeight})`,
    zIndex: 0,
    position: "relative",
    display: "flex",
    "& svg": {
      display: "none",
      zIndex: -1,
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,

      [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        display: "flex"
      }
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& a": {
        marginTop: "12px"
      }
    },
    "& h1": {
      color: theme.palette.global.white,
      textAlign: "center"
    }
  },
  textContainer: {
    width: "75%",
    maxWidth: "800px",
    margin: "auto",

    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      width: "50%"
    }
  },
  rightContainer: {
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      marginRight: "5%"
    }
  },
  leftContainer: {
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      marginLeft: "2.5%"
    }
  },
  marginVertical: {
    margin: "16px 0"
  }
}));
