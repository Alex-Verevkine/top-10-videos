import React from "react";
import classes from "./VideoCard.scss";
import PropTypes from "prop-types";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Card, CardContent } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import nFormatter from "../../utills/nFormatter";

export const VideoCard = props => {
  const { video, index } = props;
  const StyledCardContent = withStyles({
    root: { padding: "0px", "&:last-child": { paddingBottom: "0px" } }
  })(CardContent);

  return (
    <Card className={classes.resultItem} raised>
      <div className={classes.cardHeader}>
        <span>{`${index + 1} - ${video.title ? video.title : ""}`}</span>
        <span>{`${nFormatter(video.views, 1)} Views`}</span>
      </div>
      <StyledCardContent
        className={`${classes.videoContent}  ${
          classes[video.source] ? classes[video.source] : null
        } `}
      >
        <VideoPlayer video={video} />
      </StyledCardContent>
    </Card>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default VideoCard;
