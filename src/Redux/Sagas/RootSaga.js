import { all, fork } from "redux-saga/effects";

import watchAuth from "./Auth";
import Sagaa from "./LoginSaga/loginsaga";

function* rootSaga() {
  yield all([fork(Sagaa)]);
}

export default rootSaga;
