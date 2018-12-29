import React from "react";
import classes from "./VideoPlayer.scss";
import PropTypes from "prop-types";
import {
  YOUTUBE_PLAYER,
  FACEBOOK_PLAYER,
  STANDARD_PLAYER,
  getSourceUrl
} from "../../utills/videoUtils";

/**
 * @desc Private method that generates video player by provided video parameters.
 * @param  {} video video parameters.
 */
const _returnVideoElementByType = video => {
  try {
    switch (video.source) {
      case YOUTUBE_PLAYER:
      case FACEBOOK_PLAYER:
        return (
          <iframe
            title="ysz5S6PUM-U"
            className={classes.embeddedPlayer}
            type="text/html"
            src={getSourceUrl(video.videoId, video.source)}
            frameBorder="0"
          />
        );
      case STANDARD_PLAYER:
        return (
          <video controls className={classes.videoPlayer}>
            <source
              src={getSourceUrl(video.url, video.source)}
              type="video/mp4"
            />
          </video>
        );
      default:
        throw new Error("Invalid player type");
    }
  } catch (error) {
    return <div className={classes.videoNotAvailble}> </div>;
  }
};

const VideoPlayer = props => {
  const { video } = props;
  return (
    <div className={classes.playerContainer}>
      {_returnVideoElementByType(video)}
    </div>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoPlayer;
