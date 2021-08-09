import { Box } from "@material-ui/core";

import ListingPanel from "../../commons/ListingPanel/ListingPanel";

import Mission from "./mission-banner/Mission";
import Welcome from "./welcome-banner/Welcome";
import Actions from "./actions-list/Actions";
import Join from "./join-banner/Join";
import Footer from "../../commons/Footer/Footer";

export default function Home() {
  return (
    <Box component="main">
      <Welcome />
      <Mission />
      <Actions />
      <Join />
      <ListingPanel title="NOTÍCIAS" buttonText="VER MAIS" roundedCards={true} />
      <ListingPanel title="NOSSOS JOGOS" buttonText="VER MAIS" backgroundColor="gray" />
      <Footer />
    </Box>
  );
}
