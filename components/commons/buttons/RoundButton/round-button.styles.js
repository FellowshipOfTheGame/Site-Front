import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  text: {
    display: "flex",
    alignItems: "center",
    minWidth: "140px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      backgroundSize: "100%"
    },
    color: "white",
    borderRadius: "20px",
    border: "3px solid white",

    "&:hover": {
      transform: "scale(1.02)"
    }
  }
}));
