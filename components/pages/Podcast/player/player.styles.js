import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    top: "auto",
    bottom: 0,
    display: "flex",
    height: `180px`,
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    padding: "0 42px",

    "& > img": {
      width: "120px",
      height: "120px"
    },

    "& button": {
      width: "48px",
      height: "48px",

      "&.playButton": {
        width: "120px",
        height: "120px",

        "& span": {
          paddingLeft: "12px"
        }
      }
    }
  },

  controls: {
    position: "absolute",
    left: "calc(50% - 150px)",
    width: "440px",
    display: "flex",
    alignItems: "center"
  },
  timeTrackerContainer: {
    position: "absolute",
    bottom: "12px",
    left: "calc(50% - 450px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    width: "100%",
    maxWidth: "900px"
  }
}));
