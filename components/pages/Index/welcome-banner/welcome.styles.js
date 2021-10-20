import { makeStyles } from "@material-ui/core";
import { navbarHeight } from "../../../../styles/theme";

export const useStyles = makeStyles((theme) => ({
  welcome: {
    backgroundImage: "url('images/home/welcome.jpg')",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    height: `calc(100vh - ${navbarHeight})`,

    "& h1": {
      fontWeight: "400",
      color: theme.palette.colors.white,
      textAlign: "center"
    },

    "& p": {
      width: "80%",
      [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
        width: "50%"
      }
    }
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto"
  },
  headingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  welcomeBorder: {
    display: "none",
    backgroundColor: theme.palette.colors.white,
    height: "8px",
    width: "110%",
    margin: "12px",
    border: `1px solid ${theme.palette.colors.black}`,
    [theme.breakpoints.up(theme.breakpoints.values.mobile)]: {
      display: "block"
    }
  }
}));
