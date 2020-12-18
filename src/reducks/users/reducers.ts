import * as Actions from './actions'
import initialState from "../store/initialState"

export const UsersReducer = (state = initialState.users, action: Actions.UserAction) => {
    switch (action.type) {
        case Actions.SIGN_IN:
        case Actions.SIGN_OUT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
