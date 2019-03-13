/**
 * Nguyen Thien Quang
 * Description: message async sagas
 * Keywords: message sagas
 */

import { put, takeEvery, call, all, select } from "redux-saga/effects";
import { addMessageAPI, deleteMessageAPI } from "../api/message";
import { ADD_MESSAGE, ADD_MESSAGE_SUCCESS, UPDATE_MESSAGE_SUCCESS, DELETE_A_MESSAGE, DELETE_A_MESSAGE_SUCCESS, UPDATE_MESSAGE } from "../actions/messages.action";
import { IAction } from "../index.d";

export function* watchAddMessage(action: IAction) {
    action.data.pending = true;
    yield put({ type: ADD_MESSAGE_SUCCESS, data: action.data, messageId: action.data.messageId });
    try {
        const respon = yield call(addMessageAPI, action.data);
        respon.pending = false;
        respon.error = false;
        yield put({ type: UPDATE_MESSAGE_SUCCESS, data: respon, messageId: action.data.messageId });
    } catch (error) {
        action.data.pending = false;
        action.data.error = true;
        yield put({ type: UPDATE_MESSAGE_SUCCESS, data: action.data, messageId: action.data.messageId });
    }
}

export function* watchDeleteMessage(action: IAction) {
    yield put({ type: UPDATE_MESSAGE_SUCCESS, messageId: action.messageId, data: { deleting: true } });
    try {
        const respon = yield call(deleteMessageAPI, action.messageId);
        if (respon) {
            yield put({ type: DELETE_A_MESSAGE_SUCCESS, messageId: action.messageId });
        }
    } catch (error) {
        const messages = yield select((state) => state.MESSAGES);
        const data = messages[action.messageId];
        data.error = true;
        data.deleting = false;
        yield put({ type: UPDATE_MESSAGE_SUCCESS, data, messageId: action.messageId });
    }
}

export function* watchUpdateMessage(action: IAction) {
    yield put({ type: UPDATE_MESSAGE_SUCCESS, data:{... action.data, pending: true}, messageId: action.data.messageId });
    try {
        const respon = yield call(addMessageAPI, action.data);
        respon.pending = false;
        respon.error = false;
        yield put({ type: UPDATE_MESSAGE_SUCCESS, data: respon, messageId: action.data.messageId });
    } catch (error) {
        action.data.pending = false;
        action.data.error = true;
        yield put({ type: UPDATE_MESSAGE_SUCCESS, data: action.data, messageId: action.data.messageId });
    }
}

export function* addMessageSaga() {
    yield all([
        takeEvery(ADD_MESSAGE, watchAddMessage),
        takeEvery(UPDATE_MESSAGE, watchUpdateMessage),
        takeEvery(DELETE_A_MESSAGE, watchDeleteMessage)
    ]);
}
