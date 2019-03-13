import React from "react";
import { IMessage } from "../../actions/messages.action";
import Time from "./Time";
import { Paper, Typography } from "@material-ui/core";
import Loading from "./Loading";
import Tool from "./Tool";

interface IProps extends IMessage {
    updateMessage(data: IMessage): void;
    deleteMessage(messageId: string): void;
}

class MessageContent extends React.Component<IProps, {}> {
    render() {
        const { message, messageId, createdAt, updatedAt, updated } = this.props;

        return (
            <div id={`message-${messageId}`} className={"message "}>
                <div className="d-inline-block">
                    <Paper className="message-wrapper d-flex">
                        <div className="message-content w-100">
                            <div className="message-des w-100">
                                {message}
                            </div>
                            <div className="message-meta d-flex w-100 align-items-center jusity-content-between">
                                <Time time={Number(createdAt)} />
                                {this.getMeta()}
                            </div>
                        </div>
                        <Tool onDelete={this.deleteMessage} />
                    </Paper>
                </div>
            </div>
        );
    }

    protected getMeta() {
        const { pending, error, deleting } = this.props;
        if (pending) {
            return <Loading />;
        }
        if (deleting) {
            return <Typography variant="caption">Đang xóa</Typography>;
        }
        if (error) {
            return <Typography onClick={this.updateMessage} className="pointer" variant="caption" color="error">Có lỗi, nhấn để <span>gửi lại</span></Typography>;
        }
        if (!error) {
            return <Typography variant="caption">Đã gửi</Typography>;
        }
    }

    protected updateMessage = () => {
        const { updateMessage, deleteMessage, ...other } = this.props;
        updateMessage(other);
    }

    protected deleteMessage = () => {
        if (window.confirm("Are you sure?")) {
            const { deleteMessage, messageId } = this.props;
            deleteMessage(messageId as string);
        }
    }
}

export default MessageContent;
