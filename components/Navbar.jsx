import { useState } from "react";
import { AppBar, Grid, Hidden, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { NavButton } from "./buttons/NavButton";
import Logo from "./Logo";
import { useStyles } from "../styles/components/navbar.styles";

import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const classes = useStyles();
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const handleMobileMenu = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileAnchorEl(null);
  };

  const DesktopBar = () => {
    return (
      <Grid container>
        <Grid item xs={0} sm={1} md={3}>
          <Logo />
        </Grid>
        <Grid item xs={12} sm={11} md={8} container justify="space-between" alignItems="center">
          <Grid>
            <NavButton name="início" />
          </Grid>
          <Grid>
            <NavButton name="notícias" />
          </Grid>
          <Grid>
            <NavButton name="jogos" />
          </Grid>
          <Grid>
            <NavButton name="podcast" />
          </Grid>
          <Grid>
            <NavButton name="galeria" />
          </Grid>
          <Grid>
            <NavButton name="sobre" />
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const MobileBar = () => {
    return (
      <Grid container>
        <Grid item xs={1}>
          <IconButton onClick={handleMobileMenu}>
            <MenuIcon className={classes.mobileIcon} />
          </IconButton>
          <Menu
            id="mobile-menu-navbar"
            anchorEl={mobileAnchorEl}
            keepMounted
            open={Boolean(mobileAnchorEl)}
            onClose={handleCloseMobileMenu}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Notícias</MenuItem>
            <MenuItem>Jogos</MenuItem>
            <MenuItem>Podcast</MenuItem>
            <MenuItem>Galeria</MenuItem>
            <MenuItem>Sobre</MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={2}>
          <img src="/images/fog-appbar-logo.png" alt="logo" className={classes.logo} />
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar className={classes.toolbar}>
          <Hidden smDown>
            <DesktopBar />
          </Hidden>
          <Hidden mdUp>
            <MobileBar />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
