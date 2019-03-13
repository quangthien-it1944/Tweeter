/**
 * Author: Nguyen Thien Quang
 * Description: reducer Messages of redux
 * keyword: redux, messages, reducer of messages
 */

import { DELETE_MESSAGES, IMessage, IActionMessage, ADD_MESSAGE_SUCCESS, UPDATE_MESSAGE_SUCCESS, DELETE_A_MESSAGE_SUCCESS } from "../actions/messages.action";

const initState: IMessage[] = [];

const messageListReducers = (state: IMessage[] = initState, action: IActionMessage): IMessage[] => {
    switch (action.type) {
        case ADD_MESSAGE_SUCCESS:
            return [ ...state, (action.data as IMessage)  ];
            
        case UPDATE_MESSAGE_SUCCESS:
            return state.map((node: IMessage) => {
                if(node.messageId === action.messageId){
                    node = {...node, ...action.data};
                }
                return node;
            });

        case DELETE_A_MESSAGE_SUCCESS:
            return state.filter(node => node.messageId !== action.messageId);

        case DELETE_MESSAGES:
            return initState;

        default:
            return state;
    }
}

export default messageListReducers;
