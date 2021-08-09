import { Box, List, ListItem, Typography } from "@material-ui/core";
import clsx from "clsx";

import { usePageStyles } from "../index.styles";
import { useStyles } from "./actions.styles";

const actions = [
  {
    image: "images/home/gamedev.svg",
    alt: "joystick",
    heading: "Desenvolvimento de Jogos",
    body: "Desenvolvemos projetos de prototipação de jogos focado na aprendizagem de todo o processo de produção"
  },
  {
    image: "images/home/teaching.svg",
    alt: "three people having a conversation",
    heading: "Disseminação de conhecimento",
    body: "Desenvolvemos projetos de prototipação de jogos focado na aprendizagem de todo o processo de produção"
  },
  {
    image: "images/home/events.svg",
    alt: "calendar with a tick in right bottom corner",
    heading: "Organização de Eventos",
    body: "Com o objetivo de divulgar nosso grupo de extensão e nossos jogos, realizamos eventos"
  }
];

const Actions = () => {
  const classes = useStyles();
  const pageClasses = usePageStyles();

  return (
    <Box component="section" id="actions">
      <List component="ul" className={classes.roles}>
        {actions.map((action) => (
          <ListItem key={action.heading}>
            <Box component="div" className={classes.item}>
              <div>
                <img src={action.image} alt={action.alt} className={classes.actionsImage} />
                <Typography variant="h3" component="h1" className={classes.actionsHeading}>
                  {action.heading}
                </Typography>
              </div>
              <Typography
                variant="subtitle1"
                className={clsx(pageClasses.subtitle, classes.bodyText)}>
                {action.body}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Actions;
