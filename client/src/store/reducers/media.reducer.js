import * as actionTypes from "../actionTypes";
import { ALL_PLAYERS } from "../../utills/videoUtils";
const INITIAL_STATE = {
  mediaItems: [],
  error: null,
  selectedVideoSource: ALL_PLAYERS
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MEDIA_SUCCESS:
      return { ...state, mediaItems: action.payload, error: null };

    case actionTypes.FETCH_MEDIA_FAIL:
      return { ...state, mediaItems: [], error: action.payload };

    case actionTypes.SELECTED_MEDIA_SOURCE:
      return { ...state, selectedVideoSource: action.payload };

    default:
      return state;
  }
};
