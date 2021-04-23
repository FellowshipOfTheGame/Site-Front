import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  text: {
    display: "flex",
    alignItems: "center",
    width: "170px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      backgroundSize: "100%"
    },
    color: "white",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    border: "3px solid white"
  }
}));
