import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    padding: "12px 5%",

    "& svg": {
      [theme.breakpoints.down("sm")]: {
        display: "inline"
      }
    },

    "& p": {
      margin: "8px 0"
    }
  },
  footerHeading: {
    display: "flex",
    height: "60px",
    alignItems: "center"
  },
  socialNetworkImages: {
    width: "52px"
  }
}));
