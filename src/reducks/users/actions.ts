import {UserState} from "./types";

export interface UserAction {
    type: string
    payload: UserState
}

export const SIGN_IN = 'SIGN_IN'
export const signInAction = (userState: UserState): UserAction => {
    return {
        type: SIGN_IN,
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username
        }
    }
}

export const SIGN_OUT = 'SIGN_OUT'
export const signOutAction = (): UserAction => {
    return {
        type: SIGN_OUT,
        payload: {
            isSignedIn: false,
            uid: '',
            username: ''
        }
    }
}
