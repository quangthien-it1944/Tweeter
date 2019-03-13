import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./redux-sagas";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
