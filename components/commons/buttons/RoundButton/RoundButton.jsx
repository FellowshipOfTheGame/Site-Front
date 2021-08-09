import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { deburr } from "lodash";
import { useStyles } from "./round-button.styles";
import clsx from "clsx";

const RoundButton = (props) => {
  const classes = useStyles();
  const path = deburr(props.path) === "inicio" ? "/" : "/" + deburr(props.path);
  return (
    <Link href={path} passHref={true}>
      <Button {...props} className={clsx(props.className, classes.text)}>
        <Typography variant="button" component="span">
          {props.children}
        </Typography>
      </Button>
    </Link>
  );
};

RoundButton.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default RoundButton;
