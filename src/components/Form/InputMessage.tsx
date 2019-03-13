import React from "react";
import TextField from "@material-ui/core/TextField";
import splitMessage from "../../libs/Split";

export interface IStateInputMessage {
    error: boolean;
};

export interface IChangeState { 
    source: string[], 
    message: string }

export interface IPropsInputMessage {
    message: string;
    onChange: (args: IChangeState) => void;
}

class InputMessage extends React.Component<IPropsInputMessage, IStateInputMessage>{

    state: IStateInputMessage = {
        error: false
    };

    render() {
        const { message } = this.props;
        const { error } = this.state;
        return (
            <TextField placeholder="Nhập tin nhắn để gửi" className="message-input-field" error={error} value={message} onChange={this.onChange} />
        );
    }

    protected onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const message: string = e.target.value;

        let source: any = splitMessage(message);

        let error = false;

        if (source === false) {
            error = true;
            source = [];
        }

        if (this.state.error !== error) {
            this.setState({ error });
        }

        this.props.onChange({ message, source });
}
}

export default InputMessage;
