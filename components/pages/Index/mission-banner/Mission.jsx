import { Box, Typography } from "@material-ui/core";
import clsx from "clsx";

import RoundButton from "../../../commons/buttons/RoundButton/RoundButton";

import { useStyles } from "./mission.styles";
import { usePageStyles } from "../index.styles";

const Mission = () => {
  const classes = useStyles();
  const pageClasses = usePageStyles();

  return (
    <Box
      component="section"
      className={clsx(classes.mission, pageClasses.containerWithGeometry)}
      id="mission">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <polygon fill="#383737" points="50,100 30,0 100,0 100,100" />
      </svg>
      <Box className={clsx(pageClasses.textContainer, pageClasses.rightContainer)}>
        <Typography variant="h2" component="h1">
          NOSSA MISSÃO
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={clsx(pageClasses.subtitle, pageClasses.marginVertical)}>
          Somos um grupo de extensão vinculado ao ICMC-USP focado em desenvolvimento de jogos e na
          disseminação do conhecimento através de cursos e eventos abertos ao público
        </Typography>
        <RoundButton path={"sobre"}>LEIA MAIS</RoundButton>
      </Box>
    </Box>
  );
};

export default Mission;
