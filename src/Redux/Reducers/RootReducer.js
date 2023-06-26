import { combineReducers } from "redux";

import authReducer from "./Auth";
import loadingReducer from "./Api/LoadingReducer";
import errorReducer from "./Api/ErrorReducer";
import { LOGOUT } from "../Actions/Auth";
import { ACTION_STATES } from "../Actions/ActionStates";
import getdataareducer from "./getdataareducer";

const appReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  error: errorReducer,
  getUserData:getdataareducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT + ACTION_STATES.SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
