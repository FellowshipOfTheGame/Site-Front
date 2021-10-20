import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { AppBar, IconButton, Slider, Typography, withStyles } from "@material-ui/core";
import { useStyles } from "./player.styles";
import { convertDurationToTimeString } from "../../../../utils/time";

const TimeTracker = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const Player = ({ episode }) => {
  const audioRef = useRef();
  const [isPlaying, setisPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const classes = useStyles();

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleProgress(event, amount) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function onVolumeChange(event, value) {
    audioRef.current.volume = value;
    setVolume(value);
  }

  return (
    <AppBar component="section" position="fixed" className={classes.container} color="default">
      <img src={episode.itunes.image} alt="cover" />
      <div className={classes.controls}>
        <IconButton>
          <img src={"images/player/shuffle.svg"} alt="shuffle" />
        </IconButton>
        <IconButton onClick={() => (audioRef.current.volume = 0)}>
          <img src={"images/player/back.svg"} alt="back" />
        </IconButton>
        <IconButton className="playButton" onClick={() => setisPlaying(!isPlaying)}>
          <img src={"images/player/play.svg"} alt="back" />
        </IconButton>
        <IconButton onClick={() => (audioRef.current.volume = 1)}>
          <img src={"images/player/next.svg"} alt="next" />
        </IconButton>
        <IconButton>
          <img src={"images/player/repeat.svg"} alt="repeat" />
        </IconButton>
        <IconButton>
          <img src={"images/player/volume.svg"} alt="volume" />
        </IconButton>
        <Slider value={volume} onChange={onVolumeChange} min={0} max={1} step={0.05} />
      </div>
      <div className={classes.timeTrackerContainer}>
        <Typography variant="h4" component="span">
          {convertDurationToTimeString(progress)}
        </Typography>
        <TimeTracker
          max={parseFloat(episode.itunes.duration)}
          value={progress}
          onChange={handleProgress}
          aria-labelledby="time-tracker"
        />
        <Typography variant="h4" component="span">
          {convertDurationToTimeString(episode.itunes.duration)}
        </Typography>
      </div>

      {episode && (
        // <audio>
        //   <track
        //     kind="teste"
        //     src={episode.link}
        //     ref={audioRef}
        //     onPlay={() => setisPlaying(true)}
        //     onPause={() => setisPlaying(false)}
        //     onLoadedMetadata={setupProgressListener}
        //   />
        // </audio>
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio
          src={episode.enclosure.url}
          ref={audioRef}
          onPlay={() => setisPlaying(true)}
          onPause={() => setisPlaying(false)}
          onLoadedMetadata={setupProgressListener}
        />
      )}
    </AppBar>
  );
};

Player.propTypes = {
  episode: PropTypes.object
};

export default Player;
