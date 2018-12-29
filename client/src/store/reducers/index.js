import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import uiReducer from "./ui.reducer";
import mediaReducer from "./media.reducer";

export default history => {
  return combineReducers({
    router: connectRouter(history),
    ui: uiReducer,
    media: mediaReducer
  });
};
