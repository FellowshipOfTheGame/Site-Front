import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "300px",
    border: `3px solid ${theme.palette.global.black}`,

    "&:hover": {
      transform: "scale(1.02)"
    }
  },
  rounded: {
    border: `1px solid ${theme.palette.global.gray}`,
    borderRadius: "30px"
  },
  media: {
    height: "200px"
  },
  content: {
    backgroundColor: "#354a5f",
    height: "120px",
    padding: "12px",
    borderTop: `3px solid ${theme.palette.global.black}`
  },
  roundedTopBorder: {
    borderTop: `1px solid ${theme.palette.global.gray}`
  },
  title: {
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "1.625rem",
    wordWrap: "break-word",
    maxHeight: "calc(1.625rem * 2)"
  }
}));
