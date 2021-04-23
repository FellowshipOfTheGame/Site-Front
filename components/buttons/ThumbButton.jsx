import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "../../styles/components/buttons/thumb-button.styles";

const ThumbButton = (props) => {
  const classes = useStyles();
  return (
    <Link>
      <Card className={clsx(classes.root, { [classes.rounded]: props.news })}>
        <CardActionArea>
          <CardMedia className={classes.media} />
          <CardContent className={classes.content}>
            <Typography variant="subtitle1" component="p" className={classes.title}>
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ThumbButton;
