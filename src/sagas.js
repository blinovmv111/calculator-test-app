import { takeEvery, put, call } from "redux-saga/effects";
import { loadData, putData } from "./actions";

function fetchData() {
  return fetch(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  ).then((response) => response.json());
}

function* workerLoadData() {
  console.log("workerLoadData");
  const data = yield call(fetchData);
  console.log(data);
  const dollar = yield data.find((item) => item.ccy === "USD");
  yield put(putData(dollar));
}

export default function* watchLoadData() {
  console.log("loadData");
  yield takeEvery(loadData, workerLoadData);
}
