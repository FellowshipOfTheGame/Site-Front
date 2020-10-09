import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { NavButton } from "./Buttons";

const Navbar = () => {
    return (
        <div>
            <AppBar position="sticky" color="default">
                <Toolbar className="toolbar">
                    <div style={{ alignSelf: "self-end" }}>
                        <img
                            src="/images/fog-appbar-logo.png"
                            alt="logo"
                            style={{
                                height: "160px",
                                width: "160px"
                            }}
                        />
                    </div>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        style={{ marginLeft: "120px", marginRight: "96px" }}>
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
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
