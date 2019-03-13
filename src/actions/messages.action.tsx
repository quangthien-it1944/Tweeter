import { IAction } from "../index.d";
import uniqid from "uniqid";

/**
 * Nguyen Thien Quang
 * Description: Actions of messages redux
 * Keyword: actions of messages, actions
 */

export const ADD_MESSAGE        = "ADD_MESSAGE";
export const UPDATE_MESSAGE     = "UPDATE_MESSAGE";
export const DELETE_MESSAGES    = "DELETE_MESSAGES";
export const DELETE_A_MESSAGE   = "DELETE_A_MESSAGE";

export const ADD_MESSAGE_SUCCESS  = "ADD_MESSAGE_SUCCESS";
export const ADD_MESSAGE_PENDING  = "ADD_MESSAGE_PENDING";

export const UPDATE_MESSAGE_SUCCESS = "UPDATE_MESSAGE_SUCCESS";
export const DELETE_A_MESSAGE_SUCCESS = "DELETE_A_MESSAGE_SUCCESS";

export interface IMessage {
    messageId?: string;
    message?: string;
    createdAt?: number;
    updatedAt?: number;
    updated?: boolean;
    error?: boolean;
    pending?: boolean;
    deleting?: boolean;
}

export interface IActionMessage extends IAction {
    data?: IMessage;
    messageId: string;
}

export const addMessage = (data: IMessage): IAction => {
    data.messageId = uniqid();
    data.createdAt = new Date().getTime();
    return {
        type: ADD_MESSAGE,
        data
    };
}

export const updateMessage = (messageId: string, data: IMessage) => {
    data.updatedAt = new Date().getTime();
    data.updated = true;
    return {
        type: UPDATE_MESSAGE,
        messageId,
        data
    };
}

export const deleteMessages = () => {
    return {
        type: DELETE_MESSAGES
    };
}

export const deleteMessage = (messageId: string) => {
    return {
        type: DELETE_A_MESSAGE,
        messageId
    }
}
