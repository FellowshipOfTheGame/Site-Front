import { useState } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { Typography } from "@material-ui/core";

import Player from "./player/Player";

import { usePageStyles } from "./index.styles";

const Podcast = ({ feed }) => {
  // The selected season will be the one from the most recent episode
  const [selectedSeason, setSelectedSeason] = useState(feed.items[0].itunes.season);
  const [episodeList, setEpisodeList] = useState(
    feed.items.filter((episode) => episode.itunes.season === selectedSeason)
  );
  const [selectedEpisode, setSelectedEpisode] = useState(episodeList[0]);
  const pageClasses = usePageStyles();

  return (
    <div className={pageClasses.container}>
      <main className={pageClasses.main}>
        <div className={pageClasses.feedContainer}>
          <img src={selectedEpisode.itunes.image} alt="logo"></img>
          <div>
            <Typography variant="h2" component="h1">
              {feed.title}
            </Typography>
            <Typography variant="subtitle1" component="p">
              {selectedEpisode.title}
            </Typography>
            <Typography variant="h4" component="span">
              {parse(selectedEpisode.itunes.summary)}
            </Typography>
          </div>
        </div>
      </main>
      <aside className={pageClasses.aside}>
        <div></div>
      </aside>
      <Player episode={selectedEpisode} />
    </div>
  );
};

Podcast.propTypes = {
  feed: PropTypes.object.isRequired
};

export default Podcast;
