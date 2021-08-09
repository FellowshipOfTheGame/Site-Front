import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  join: {
    backgroundImage: "url('images/home/join-calling.png')"
  },
  backgroundMask: {
    background: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%"
  }
}));
