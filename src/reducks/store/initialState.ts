import {User} from '../../types/User'

export interface State {
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
