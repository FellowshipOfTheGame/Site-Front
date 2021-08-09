import { useState } from "react";
import { AppBar, Grid, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import NavButton from "../buttons/NavButton/NavButton";

import { useStyles } from "./navbar.styles";

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
      <Grid container className={classes.desktop}>
        <Grid item xs={0} sm={1} md={3}>
          <img src="/images/fog-appbar-logo.png" alt="logo" className={classes.desktopLogo} />
        </Grid>
        <Grid
          item
          container
          justify="space-between"
          alignItems="center"
          className={classes.buttonsContainer}>
          <Grid>
            <NavButton name="início" />
          </Grid>
          <Grid>
            <NavButton name="notícias" />
          </Grid>
          <Grid>
            <NavButton name="eventos" />
          </Grid>
          <Grid>
            <NavButton name="jogos" />
          </Grid>
          <Grid>
            <NavButton name="podcast" />
          </Grid>
          <Grid>
            <NavButton name="membros" />
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
      <Grid container className={classes.mobile}>
        <Grid item xs={1}>
          <IconButton onClick={handleMobileMenu}>
            <MenuIcon className={classes.mobileIcon} />
          </IconButton>
          <Menu
            id="mobile-menu-navbar"
            className={classes.mobileMenu}
            anchorEl={mobileAnchorEl}
            keepMounted
            open={Boolean(mobileAnchorEl)}
            onClose={handleCloseMobileMenu}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Notícias</MenuItem>
            <MenuItem>Eventos</MenuItem>
            <MenuItem>Jogos</MenuItem>
            <MenuItem>Podcast</MenuItem>
            <MenuItem>Membros</MenuItem>
            <MenuItem>Sobre</MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={2}>
          <img src="/images/fog-appbar-logo.png" alt="logo" className={classes.mobileLogo} />
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar className={classes.toolbar}>
          <DesktopBar />
          <MobileBar />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
