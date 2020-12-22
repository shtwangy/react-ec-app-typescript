import {signInAction} from "./actions";
import {push} from 'connected-react-router'
import {Dispatch} from "redux";
import {State} from "../store/initialState";

interface ApiResponse {
    login: string
}

export const signIn = () => {
    return async (dispatch: Dispatch, getState: () => State) => {
        const state = getState()
        const isSignedIn = state.users.isSignedIn

        if (!isSignedIn) {
            const url = 'https://api.github.com/users/shtwangy'
            const response = await fetch(url)
                .then(res => res.json())
                .then((data: ApiResponse) => data)
                .catch(() => null)

            if (response) {
                const username = response.login
                dispatch(signInAction({
                    isSignedIn: true,
                    uid: '0001',
                    username: username
                }))
            }

            dispatch(push('/'))
        }
    }
}
