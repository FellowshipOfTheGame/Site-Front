import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "360px",
    height: "360px"
  },
  rounded: {
    borderRadius: "30px"
  },
  media: {
    height: "240px"
  },
  content: {
    backgroundColor: "#354a5f",
    height: "120px"
  },
  title: {
    color: theme.palette.global.white,
    lineHeight: 1.3
  }
}));
