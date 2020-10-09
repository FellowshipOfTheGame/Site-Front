import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#354A5F"
        },
        secondary: {
            main: "#F1CD36"
        }
    },
    overrides: {
        MuiAppBar: {
            root: {
                height: "96px"
            },
            colorDefault: {
                color: "#FFFFFF",
                backgroundColor: "#000000"
            }
        }
    }
});
