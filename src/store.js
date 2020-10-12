import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import watchLoadData from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLoadData);

export default store;
