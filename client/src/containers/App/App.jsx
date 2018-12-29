import React, { Component } from "react";
import classes from "./App.scss";
import { connect } from "react-redux";
import { VideoCard, NavBar, Spinner } from "../../components";
import { getMedia, setSelectedVideoSource } from "../../store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    props.getMedia();
  }

  videoSourceSelectedHandler = event => {
    this.props.setSelectedVideoSource(event.target.value);
    this.props.getMedia();
  };

  render() {
    return (
      <>
        <NavBar
          onChangeHandler={this.videoSourceSelectedHandler}
          selectedVideoSource={this.props.selectedVideoSource}
        />
        <div className={classes.content}>
          {this.props.isLoading ? (
            <div className={classes.contentSpinner}>
              <Spinner />
            </div>
          ) : (
            <section className={classes.resultsArea}>
              {this.props.media.map((video, index) => (
                <VideoCard key={index} index={index} video={video} />
              ))}
            </section>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
    selectedVideoSource: state.media.selectedVideoSource,
    media: state.media.mediaItems
  };
};

export default connect(
  mapStateToProps,
  { getMedia, setSelectedVideoSource }
)(App);
