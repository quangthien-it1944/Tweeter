import { connect } from "react-redux";
import Form from "./Form";
import { addMessage, IMessage, ADD_MESSAGE } from "../../actions/messages.action";
import { IReducers } from "../../reducers";

const mapStateToProps = (state: IReducers) => {
    return {};
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (data: IMessage) => {
            dispatch(addMessage(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
