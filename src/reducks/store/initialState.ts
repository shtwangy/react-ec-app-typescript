import {User} from '../../types/User'
import {Reducer} from "redux";
import {LocationChangeAction, RouterState} from "connected-react-router";

export interface State {
    router: Reducer<RouterState, LocationChangeAction> // TODO: ここに定義していいかは要検討
    users: User
}

const initialState = {
    users: {
        isSignedIn: false,
        uid: '',
        username: ''
    }
}

export default initialState
