import React, { FormEvent } from "react";
import InputMessage, { IChangeState } from "./InputMessage";
import Button from "@material-ui/core/Button";
import Forward from "@material-ui/icons/Forward";
import "./style.scss";
import Typography from "@material-ui/core/Typography";

interface IStateFormComponent {
    source: string[];
    message: string;
}

class FormComponent extends React.Component<any, IStateFormComponent> {
    state = {
        source: [],
        message: ''
    };

    render() {

        const { message, source } = this.state;

        return (
            <form onSubmit={this.onSubmit} id="form-message" action="#" className="d-flex w-100 align-items-end justify-content-center">
                <InputMessage message={message} onChange={this.onChange} />
                <div className="submit-wrapper">
                    <Typography id="count-message">{message.length} / {source.length}</Typography>
                    <Button disabled={!Boolean(source.length) || !message.length} className="rounded-0" variant="contained" color="primary" type="submit">
                        <Forward />
                    </Button>
                </div>
            </form>
        );

    }

    onChange = (args: IChangeState) => {
        this.setState({
            message: args.message,
            source: args.source
        });
    }

    onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { addMessage } = this.props;

        const { source } = this.state;

        source.map(message => {
            addMessage({ message });
        });

        this.setState({message: '', source: []});
    }

}

export default FormComponent;
