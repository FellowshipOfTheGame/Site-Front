import { useRouter } from "next/router";
import { Button, Link, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";
import { deburr } from "lodash";
import { useStyles } from "../../styles/components/buttons/nav-button.styles";

export const NavButton = (props) => {
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
