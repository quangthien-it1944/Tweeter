/**
 * Author: Nguyen Thien Quang
 * Description: reducers for store ( redux )
 * keywords: reducers, redux, reducers of redux
 */

import { combineReducers } from "redux";

// @ REDUCERS
import MESSAGES from "./messages.reducer";
import { IMessage } from "../actions/messages.action";
// END REDUCERS

export interface IReducers {
    MESSAGES: IMessage[];
}

const reducers = combineReducers({ MESSAGES });

export default reducers;
