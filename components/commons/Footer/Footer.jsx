import { Box, IconButton, Link, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./footer.styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={clsx(classes.footer)} id="contact">
      <Typography variant="h2" component="h1" className={clsx(classes.footerHeading)}>
        CONTATO
      </Typography>
      <Typography variant="h3" component="p">
        Endereço
      </Typography>
      <Typography variant="h3" component="p">
        Av. Trab. São Carlense, 400 - Centro, São Carlos - SP, 13566-590
      </Typography>
      <Typography variant="h3" component="p">
        E-mail:
      </Typography>
      <Typography variant="h3" component="p">
        fog@icmc.usp.br
      </Typography>
      <Typography variant="h3" component="p">
        Redes Sociais:
      </Typography>
      <Box component="section">
        <Link href={"https://www.facebook.com/fogicmc"} target="_blank" rel="noopener">
          <IconButton>
            <img
              src={"images/social-network-icons/facebook.svg"}
              alt="facebook"
              className={classes.socialNetworkImages}
            />
          </IconButton>
        </Link>
        <Link href={"https://twitter.com/fogicmcusp"} target="_blank" rel="noopener">
          <IconButton>
            <img
              src={"images/social-network-icons/twitter.svg"}
              alt="twitter"
              className={classes.socialNetworkImages}
            />
          </IconButton>
        </Link>
        <Link href={"https://www.instagram.com/fog_icmc/"} target="_blank" rel="noopener">
          <IconButton>
            <img
              src={"images/social-network-icons/instagram.svg"}
              alt="instagram"
              className={classes.socialNetworkImages}
            />
          </IconButton>
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UCbpQf6ks8uAGblsR1W0eFuQ"}
          target="_blank"
          rel="noopener">
          <IconButton>
            <img
              src={"images/social-network-icons/youtube.svg"}
              alt="youtube"
              className={classes.socialNetworkImages}
            />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
