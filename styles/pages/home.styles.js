import { makeStyles } from "@material-ui/core";

const largePanelHeight = "800px";
const smDownLargePanelHeight = "360px";
const midPanelHeight = "600px";
const smMidPanelHeight = "280px";

export const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: theme.palette.global.white,
    textAlign: "center",
    lineHeight: 1.2
  },
  mdDownHidden: {
    [theme.breakpoints.down("md")]: {
      overflowX: "scroll",
      display: "none"
    }
  },
  lgDownHidden: {
    [theme.breakpoints.down("lg")]: {
      overflowX: "scroll",
      display: "none"
    }
  },
  subtitleWidthLimitation: {
    maxWidth: "640px",
    margin: "16px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "8px 0"
    }
  },
  welcome: {
    backgroundImage: "url('images/home/welcome.jpg')",
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    height: largePanelHeight,
    [theme.breakpoints.down("sm")]: {
      height: smDownLargePanelHeight,
      backgroundSize: "100% 100%"
    },

    "& h1": {
      fontWeight: "400",
      color: theme.palette.global.white,
      textAlign: "center"
    },

    "& p": {
      width: "80%"
    }
  },
  white: {
    color: theme.palette.global.white
  },
  textContainer: {
    display: "flex",
    width: "50%",
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
    backgroundColor: theme.palette.global.white,
    height: "8px",
    width: "110%",
    margin: "12px",
    border: `1px solid ${theme.palette.global.black}`
  },
  actionsImage: {
    width: "220px",

    [theme.breakpoints.down("sm")]: {
      width: "100px"
    },

    filter:
      "invert(100%) sepia(0%) saturate(7493%) hue-rotate(313deg) brightness(105%) contrast(100%)"
  },
  actionsHeading: {
    margin: "12px 0",
    color: theme.palette.global.white,
    textAlign: "center"
  },
  mission: {
    backgroundImage: "url('images/home/mission.jpg')",
    backgroundSize: "60% 100%",
    backgroundRepeat: "no-repeat",

    "& div": {
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        marginRight: "5vw"
      }
    }
  },
  join: {
    backgroundImage: "url('images/home/join-calling.png')",
    backgroundSize: "60% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",

    "& div": {
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        marginLeft: "5vw"
      }
    }
  },
  containerWithGeometry: {
    zIndex: 0,
    position: "relative",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      height: smDownLargePanelHeight,
      backgroundSize: "100% 100%"
    },
    height: largePanelHeight,
    "& svg": {
      [theme.breakpoints.down("sm")]: {
        display: "none"
      },
      zIndex: -1,
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& a": {
        marginTop: "12px"
      }
    }
  },
  roles: {
    display: "flex",
    height: midPanelHeight,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      height: "auto"
    },

    "& li": {
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: {
        height: smMidPanelHeight
      },

      "& div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    },
    "& li:first-of-type, li:last-of-type": {
      backgroundColor: theme.palette.primary.light
    }
  },
  news: {
    height: midPanelHeight,
    backgroundColor: theme.palette.primary.main
  },
  newsHeader: {
    position: "relative",
    display: "flex",
    height: "100px",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingTop: "8px"
    }
  },
  newsContent: {
    display: "flex",
    height: `calc(${midPanelHeight} - 100px)`,
    alignItems: "center",
    justifyContent: "space-around",

    "& ul": {
      display: "flex",

      "& li": {
        padding: "0 8px"
      }
    }
  },
  float: {
    position: "absolute",
    top: "30px",
    right: "30px",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: 0,
      right: 0,
      paddingTop: "8px"
    }
  },
  games: {
    height: midPanelHeight,
    backgroundColor: "#383737"
  },
  footer: {
    backgroundImage: "url('images/home/map.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    height: "540px",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5vw",

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
    height: "100px",
    alignItems: "center"
  },
  socialNetworkImages: {
    width: "100px"
  }
}));
