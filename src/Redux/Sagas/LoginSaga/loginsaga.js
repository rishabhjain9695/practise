import axios from "axios";
import { takeLatest, put, all } from "redux-saga/effects";
function* getuserdata(payload) {
  try {
    const response = yield axios.get(
      "https://customcricketmatch-default-rtdb.firebaseio.com/playerData.json"
    );
    const playersDataWithKey = [];
    for (let key in response.data) {
      playersDataWithKey.push({ ...response.data[key], key: key });
    }
    yield put(setData(playersDataWithKey));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }}
function* Sagaa() {
  yield all([
    takeLatest("GETDATA", getuserdata)
  ]);
}



export default Sagaa;