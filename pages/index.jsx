import { Box, Hidden, IconButton, Link, List, ListItem, Typography } from "@material-ui/core";
import clsx from "clsx";
import { RoundButton } from "../components/buttons/RoundButton";
import ThumbButton from "../components/buttons/ThumbButton";
import { useStyles } from "../styles/pages/home.styles";

const actions = [
  {
    image: "images/home/gamedev.svg",
    alt: "joystick",
    heading: "Desenvolvimento de Jogos",
    body:
      "Desenvolvemos projetos de prototipação de jogos focado na aprendizagem de todo o processo de produção"
  },
  {
    image: "images/home/teaching.svg",
    alt: "three people having a conversation",
    heading: "Disseminação de conhecimento",
    body:
      "Desenvolvemos projetos de prototipação de jogos focado na aprendizagem de todo o processo de produção"
  },
  {
    image: "images/home/events.svg",
    alt: "calendar with a tick in right bottom corner",
    heading: "Organização de Eventos",
    body: "Com o objetivo de divulgar nosso grupo de extensão e nossos jogos, realizamos eventos"
  }
];

const cards = [
  {
    title: "Hellblade 2 terá um grande foco nos combates"
  },
  {
    title: "Preço das ações da Square Enix subiu após rumor de aquisição"
  },
  {
    title: "Diretor de Days Gone critica os fãs que não pagam o preço cheio do jogo"
  },
  {
    title: "Hellblade 2 terá um grande foco nos combates"
  },
  {
    title: "Preço das ações da Square Enix subiu após rumor de aquisição"
  }
];

export default function Home() {
  const classes = useStyles();

  return (
    <Box component="main">
      <Box component="section" className={classes.welcome} id="welcome">
        <Box component="div" className={classes.textContainer}>
          <Box component="div" className={classes.headingContainer}>
            <Typography variant="h1" component="h1">
              BEM VINDO AO FOG
            </Typography>
            <Hidden smDown>
              <Box component="div" className={classes.welcomeBorder}></Box>
            </Hidden>
          </Box>
          <Hidden smDown>
            <Typography variant="subtitle1" component="p" className={classes.subtitle}>
              Somos um grupo de extensão vinculado ao ICMC - USP focado em desenvolvimento de jogos
              e na disseminação do conhecimento através de cursos e eventos abertos ao público.
            </Typography>
          </Hidden>
        </Box>
      </Box>
      <Box
        component="section"
        className={clsx(classes.mission, classes.containerWithGeometry)}
        id="mission">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <polygon fill="#383737" points="50,100 30,0 100,0 100,100" />
        </svg>
        <Box>
          <Typography variant="h2" component="h1" className={classes.white}>
            NOSSA MISSÃO
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={clsx(classes.subtitle, classes.subtitleWidthLimitation)}>
            Somos um grupo de extensão vinculado ao ICMC-USP focado em desenvolvimento de jogos e na
            disseminação do conhecimento através de cursos e eventos abertos ao público
          </Typography>
          <RoundButton path={"sobre"}>LEIA MAIS</RoundButton>
        </Box>
      </Box>
      <Box component="section" id="actions">
        <List component="ul" className={classes.roles}>
          {actions.map((action) => (
            <ListItem key={action.heading}>
              <Box component="div">
                <img src={action.image} alt={action.alt} className={classes.actionsImage} />
                <Typography variant="h3" component="h1" className={classes.actionsHeading}>
                  {action.heading}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  {action.body}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        component="section"
        className={clsx(classes.join, classes.containerWithGeometry)}
        id="join">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <polygon fill="#383737" points="0,100 0,0 70,0 40,100" />
        </svg>
        <Box className={classes.joinInfo}>
          <Typography variant="h2" component="h1" className={classes.white}>
            FAÇA PARTE
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={clsx(classes.subtitle, classes.subtitleWidthLimitation)}>
            Estamos sempre à procura de novos talentos, que são criativos e gostam de criar seus
            próprios jogos, venha fazer parte você também!
          </Typography>
          <RoundButton path={"sobre"}>LEIA MAIS</RoundButton>
        </Box>
      </Box>
      <Box component="section" className={classes.news} id="news">
        <Box component="header" className={classes.newsHeader}>
          <Typography variant="h2" component="h1" className={classes.white}>
            NOTÍCIAS
          </Typography>
          <RoundButton path={"noticias"} className={classes.float}>
            VER MAIS
          </RoundButton>
        </Box>
        <Box component="section" className={classes.newsContent}>
          <List component="ul">
            {cards.map((card, index) => (
              <ListItem
                key={card.title}
                className={clsx({
                  [classes.mdDownHidden]: index > 1,
                  [classes.lgDownHidden]: index > 2
                })}>
                <ThumbButton news title={card.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box component="section" className={classes.games} id="games">
        <Box component="header" className={classes.newsHeader}>
          <Typography variant="h2" component="h1" className={classes.white}>
            NOSSOS JOGOS
          </Typography>
          <RoundButton path={"jogos"} className={classes.float}>
            VER MAIS
          </RoundButton>
        </Box>
        <Box component="section" className={classes.newsContent}>
          <List component="ul">
            {cards.map((card, index) => (
              <ListItem
                key={card.title}
                className={clsx({
                  [classes.mdDownHidden]: index > 1,
                  [classes.lgDownHidden]: index > 2
                })}>
                <ThumbButton title={card.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        component="section"
        className={clsx(classes.footer, classes.containerWithGeometry)}
        id="contact">
        <svg viewBox="0 0 100 20" preserveAspectRatio="xMidYMid slice">
          <polygon fill="#1e2264" points="0,100 0,0 70,0 40,100" />
        </svg>
        <Typography
          variant="h2"
          component="h1"
          className={clsx(classes.white, classes.footerHeading)}>
          CONTATO
        </Typography>
        <Typography variant="h3" component="p" className={classes.white}>
          Endereço
        </Typography>
        <Typography variant="h3" component="p" className={classes.white}>
          Av. Trab. São Carlense, 400 - Centro, São Carlos - SP, 13566-590
        </Typography>
        <Typography variant="h3" component="p" className={classes.white}>
          E-mail:
        </Typography>
        <Typography variant="h3" component="p" className={classes.white}>
          fog@icmc.usp.br
        </Typography>
        <Typography variant="h3" component="p" className={classes.white}>
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
    </Box>
  );
}
