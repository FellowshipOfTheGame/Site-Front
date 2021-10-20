import { makeStyles } from "@material-ui/core";
import { navbarHeight } from "../../../styles/theme";

export const usePageStyles = makeStyles((theme) => ({
  container: {
    display: "flex"
  },
  main: {
    background: theme.palette.background.main,
    display: "flex",
    width: "calc(100% - 360px)",
    height: "calc(100vh - 96px - 180px)",
    justifyContent: "center"
  },
  feedContainer: {
    display: "flex",
    margin: "80px",
    marginLeft: "188px",
    height: "fit-content",

    "& img": {
      width: "180px",
      height: "180px",
      borderRadius: "12px",
      marginRight: "28px"
    },

    "& h1": {
      textTransform: "uppercase"
    }
  },
  aside: {
    background: theme.palette.colors.gray,
    position: "absolute",
    top: navbarHeight,
    right: 0,
    display: "flex",
    width: "360px",
    height: `calc(100vh - ${navbarHeight} - 180px)`
  }
}));
