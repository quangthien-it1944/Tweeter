import { all, call } from "redux-saga/effects";
import { addMessageSaga } from "./message.sagas";

export default function* rooSaga(){
    yield call(addMessageSaga);
}
