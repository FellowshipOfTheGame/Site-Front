import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/theme";

import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Fellowship of The Game</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Component {...pageProps} />
            </ThemeProvider>
        </Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
};
