import { Button, Link, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { deburr } from "lodash";
import { useStyles } from "../../styles/components/buttons/round-button.styles";

export const RoundButton = (props) => {
  const classes = useStyles();
  const path = deburr(props.path) === "inicio" ? "/" : "/" + deburr(props.path);
  return (
    <Link href={path} passHref className={props.className}>
      <Button {...props} className={classes.text}>
        <Typography variant="button" component="span">
          {props.children}
        </Typography>
      </Button>
    </Link>
  );
};

RoundButton.propTypes = {
  path: PropTypes.string,
  className: PropTypes.object,
  children: PropTypes.node
};
