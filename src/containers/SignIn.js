import SignInClass from "../templates/SignInClass";
import {compose} from "redux";
import {connect} from "react-redux";
import * as Actions from '../reducks/users/operations'

export const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            signIn() {
                dispatch(Actions.signIn())
            }
        }
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(SignInClass)
