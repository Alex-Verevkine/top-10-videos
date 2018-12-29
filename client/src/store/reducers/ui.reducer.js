import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return { ...state, isLoading: true };

    case actionTypes.LOADING_END:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
