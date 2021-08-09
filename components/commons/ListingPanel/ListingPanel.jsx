import { Box, List, ListItem, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";

import RoundButton from "../buttons/RoundButton/RoundButton";
import ThumbButton from "../buttons/ThumbButton/ThumbButton";

import { useStyles } from "./listingPanel.styles";

const cards = [
  {
    title: "Hellblade 2 terá um grande foco nos combates"
  },
  {
    title: "Preço das ações da Square Enix subiu após rumor de aquisição"
  },
  {
    title: "Diretor de Days Gone critica os fãs que não pagam o preço cheio do jogo"
  }
];

const ListingPanel = ({ title, buttonText, backgroundColor, roundedCards }) => {
  const classes = useStyles({ backgroundColor });

  return (
    <Box component="section" className={classes.container} id="news">
      <Box component="header" className={classes.header}>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
        {buttonText && (
          <RoundButton path={"noticias"} className={classes.floatButton}>
            {buttonText}
          </RoundButton>
        )}
      </Box>
      <Box component="section" className={classes.content}>
        <List component="ul">
          {cards.map((card, index) => (
            <ListItem
              key={index}
              className={clsx({
                [classes.mdDownHidden]: index > 1,
                [classes.lgDownHidden]: index > 2
              })}>
              <ThumbButton roundedCards={roundedCards} title={card.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

ListingPanel.defaultProps = {
  roundedCards: false,
  backgroundColor: "blue"
};

ListingPanel.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.oneOf(["blue", "gray"]),
  roundedCards: PropTypes.bool
};

export default ListingPanel;
