import { Box, Typography } from "@material-ui/core";
import clsx from "clsx";

import RoundButton from "../../../commons/buttons/RoundButton/RoundButton";

import { usePageStyles } from "../index.styles";
import { useStyles } from "./join.styles";

const Join = () => {
  const classes = useStyles();
  const pageClasses = usePageStyles();

  return (
    <Box
      component="section"
      className={clsx(classes.join, pageClasses.containerWithGeometry)}
      id="join">
      <div className={classes.backgroundMask} />
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <polygon fill="#383737" points="0,100 0,0 70,0 40,100" />
      </svg>
      <Box className={clsx(pageClasses.textContainer, pageClasses.leftContainer)}>
        <Typography variant="h2" component="h1">
          FAÇA PARTE
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={clsx(pageClasses.subtitle, pageClasses.marginVertical)}>
          Estamos sempre à procura de novos talentos, que são criativos e gostam de criar seus
          próprios jogos, venha fazer parte você também!
        </Typography>
        <RoundButton path={"sobre"}>LEIA MAIS</RoundButton>
      </Box>
    </Box>
  );
};

export default Join;
