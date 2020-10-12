import { takeEvery, put, call } from "redux-saga/effects";
import { loadData, putData } from "./actions";

function fetchData() {
  fetch(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  ).then((response) => response.json());
}

function* workerLoadData() {
  const data = yield call(fetchData);
  const dollar = yield data.find((item) => item.ccy === "USD");
  yield put(putData(+dollar.sale));
}

export default function* watchLoadData() {
  yield takeEvery(loadData, workerLoadData);
}
