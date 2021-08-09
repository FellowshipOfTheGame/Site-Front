import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@material-ui/core";
import clsx from "clsx";

import { useStyles } from "./thumb-button.styles";

const ThumbButton = (props) => {
  const { roundedCards, title } = props;
  const classes = useStyles();

  return (
    <Link>
      <Card
        square
        elevation={12}
        className={clsx(classes.root, { [classes.rounded]: roundedCards })}>
        <CardActionArea>
          <CardMedia className={classes.media} image={"/images/fog-appbar-logo.png"} />
          <CardContent
            className={clsx(classes.content, { [classes.roundedTopBorder]: roundedCards })}>
            <Typography variant="h3" component="p" className={classes.title}>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

ThumbButton.propTypes = {
  roundedCards: PropTypes.bool,
  title: PropTypes.string
};

export default ThumbButton;
