import { Box, Typography } from "@material-ui/core";

import { useStyles } from "./welcome.styles";
import { usePageStyles } from "../index.styles";

const Welcome = () => {
  const baseClasses = useStyles();
  const pageClasses = usePageStyles();

  return (
    <Box component="section" className={baseClasses.welcome} id="welcome">
      <Box component="div" className={baseClasses.textContainer}>
        <Box component="div" className={baseClasses.headingContainer}>
          <Typography variant="h1" component="h1">
            BEM VINDO AO FOG
          </Typography>
          <Box component="div" className={baseClasses.welcomeBorder}></Box>
        </Box>
        <Typography variant="subtitle1" component="p" className={pageClasses.subtitle}>
          Somos um grupo de extensão vinculado ao ICMC - USP focado em desenvolvimento de jogos e na
          disseminação do conhecimento através de cursos e eventos abertos ao público.
        </Typography>
      </Box>
    </Box>
  );
};

export default Welcome;
