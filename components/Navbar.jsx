import { useState } from "react";
import { AppBar, Grid, Hidden, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { NavButton } from "./Buttons";

import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
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
                    <img
                        src="/images/fog-appbar-logo.png"
                        alt="logo"
                        style={{
                            height: "160px",
                            width: "160px",
                            position: "absolute",
                            top: "0"
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={7} container justify="space-between" alignItems="center">
                    <Grid>
                        <NavButton name="home" />
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
                        <MenuIcon style={{ fontSize: "2rem", color: "#FFF" }} />
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
                    <img
                        src="/images/fog-appbar-logo.png"
                        alt="logo"
                        style={{
                            height: "80px",
                            width: "80px",
                            position: "absolute",
                            top: "0"
                        }}
                    />
                </Grid>
            </Grid>
        );
    };

    return (
        <div>
            <AppBar position="sticky" color="default">
                <Toolbar style={{ height: "96px" }}>
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
