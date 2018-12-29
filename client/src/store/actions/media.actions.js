import * as actionTypes from "../actionTypes";
import { VideosService } from "../../services/videos/videos.service";
import { ALL_PLAYERS } from "../../utills/videoUtils";

/**
 * @desc Action, that get requested video items by source and fetch them.
 */
export const getMedia = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.LOADING_START });
  dispatch({ type: actionTypes.FETCH_MEDIA_START });
  try {
    let aa =
      getState().media.selectedVideoSource !== ALL_PLAYERS
        ? getState().media.selectedVideoSource
        : null;
    const requestedMedia = await VideosService.getVideos(aa);
    dispatch({
      type: actionTypes.FETCH_MEDIA_SUCCESS,
      payload: requestedMedia.data
    });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_MEDIA_FAIL, payload: error });
  } finally {
    dispatch({ type: actionTypes.LOADING_END });
  }
};

/**
 * @desc Action, that set selected video source.
 */
export const setSelectedVideoSource = mediaSource => dispatch => {
  dispatch({
    type: actionTypes.SELECTED_MEDIA_SOURCE,
    payload: mediaSource
  });
};
