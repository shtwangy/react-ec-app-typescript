import {UserState} from '../users/types'
import {Reducer} from "redux";
import {LocationChangeAction, RouterState} from "connected-react-router";

export interface State {
    router: Reducer<RouterState, LocationChangeAction> // TODO: ここに定義していいかは要検討
    users: UserState
}

const initialState = {
    users: {
        isSignedIn: false,
        uid: '',
        username: ''
    }
}

export default initialState
