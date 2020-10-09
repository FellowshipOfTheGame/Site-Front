import Link from "next/link";
import { useRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { deburr } from "lodash";

export const NavButton = withStyles(() => ({
    root: {
        textTransform: "Capitalize"
    }
}))((props) => {
    const router = useRouter();
    const path = deburr(props.name) === "home" ? "/" : "/" + deburr(props.name);
    return (
        <Link href={path} passHref>
            <Button {...props}>
                <Typography
                    variant="h4"
                    style={{
                        color: "white",
                        borderBottom: path === router.pathname ? "white 4px solid" : ""
                    }}>
                    {props.name}
                </Typography>
            </Button>
        </Link>
    );
});
