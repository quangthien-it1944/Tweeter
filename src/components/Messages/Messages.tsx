import React from "react";
import { IMessage } from "../../actions/messages.action";
import Message from "./Message";

interface IProps {
    messages: IMessage[];
    [key: string]: any;
}

export default (props: IProps) => {
    const {messages} = props;

    return (
        <div id="messages">
            {
                messages.map(({message, createdAt, updated, updatedAt, messageId, pending, error, deleting}) => {
                    return <Message 
                        key={messageId} 
                        message={message} 
                        createdAt={createdAt} 
                        updated={updated} 
                        updatedAt={updatedAt} 
                        pending={pending}
                        error={error}
                        messageId={messageId}
                        deleting={deleting}
                    />;
                })
            }
        </div>
    );
}
