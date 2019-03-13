import React from "react";
import {connect} from "react-redux";
import MessageContent from "./MessageContent";
import { deleteMessage, IMessage, updateMessage } from "../../actions/messages.action";

const mapDispatchToProps = (dispatch: any) => ({
    deleteMessage: (messageId: string) => {
        dispatch(deleteMessage(messageId));
    },
    updateMessage: (data: IMessage) => {
        const { messageId } = data;
        dispatch(updateMessage((messageId as string), data));
    }
});

export default connect(null, mapDispatchToProps)(MessageContent);
