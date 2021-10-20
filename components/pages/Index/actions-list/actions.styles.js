import { makeStyles } from "@material-ui/core";
import { navbarHeight, midPanelHeight } from "../../../../styles/theme";

export const useStyles = makeStyles((theme) => ({
  actionsImage: {
    width: `calc((100vh - ${navbarHeight}) / 12)`,

    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      width: "200px"
    },

    filter:
      "invert(100%) sepia(0%) saturate(7493%) hue-rotate(313deg) brightness(105%) contrast(100%)"
  },
  actionsHeading: {
    margin: "12px 0 0",
    color: theme.palette.colors.white,
    textAlign: "center"
  },
  roles: {
    display: "block",
    height: `calc(100vh - ${navbarHeight})`,

    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      display: "flex",
      height: midPanelHeight
    },
    "& li": {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      justifyContent: "center",
      minHeight: `calc((100vh - ${navbarHeight}) / 3)`,
      padding: "16px",

      [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        height: "100%"
      },

      "& div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    },
    "& li:first-of-type, li:last-of-type": {
      backgroundColor: theme.palette.primary.light
    }
  },
  item: {
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
    "& > div": {
      marginBottom: "12px"
    }
  },
  bodyText: {
    width: "90%"
  }
}));
