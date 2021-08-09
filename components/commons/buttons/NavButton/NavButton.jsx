import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Button, Link, Typography } from "@material-ui/core";
import clsx from "clsx";
import { deburr } from "lodash";
import { useStyles } from "./nav-button.styles";

const NavButton = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const path = deburr(props.name) === "inicio" ? "/" : "/" + deburr(props.name);
  return (
    <Link href={path} passHref>
      <Button {...props}>
        <Typography
          variant="h6"
          component="span"
          className={clsx(classes.text, { [classes.underline]: router.pathname === path })}>
          {props.name}
        </Typography>
      </Button>
    </Link>
  );
};

NavButton.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavButton;
