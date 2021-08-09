import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 0px",
    backgroundColor: (props) =>
      props.backgroundColor === "blue" ? theme.palette.primary.main : theme.palette.global.darkGray
  },
  header: {
    position: "relative",
    display: "flex",
    height: "70px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",

    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      flexDirection: "column",
      paddingTop: "12px"
    }
  },
  content: {
    width: "100%",

    "& ul": {
      display: "flex",
      justifyContent: "space-evenly",

      "& li": {
        display: "block",
        width: "320px",

        "& a": {
          textDecoration: "none"
        }
      }
    }
  },
  floatButton: {
    position: "relative",
    top: 0,
    right: 0,
    paddingTop: "8px",

    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      position: "absolute",
      top: "15px",
      right: "30px"
    }
  }
}));
