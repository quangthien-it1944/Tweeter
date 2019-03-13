import { connect } from "react-redux";
import Messages from "./Messages";
import { IReducers } from "../../reducers";
import "./style.scss";

const mapStateToProps = (state: IReducers) => {
    return {
        messages: state.MESSAGES
    };
}

export default connect(mapStateToProps)((Messages as any));
