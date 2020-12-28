import {signInAction} from "./actions";
import {push} from 'connected-react-router'
import {Dispatch} from "redux";
import {State} from "../store/initialState";
import {auth, db, FirebaseTimestamp} from '../../firebase'

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

export const signUp = (username: string, email: string, password: string, confirmPassword: string) => {
    return async (dispatch: Dispatch) => {
        // validation check
        if (username === '' && email === '' && password === '' && confirmPassword ==='') {
            alert('必須項目が未入力です')
            return false
        }

        if (password !== confirmPassword) {
            alert('パスワードと確認用パスワードが一致しません')
            return false
        }
        return auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                const user = res.user
                if (user) {
                    const uid = user.uid
                    const timestamp = FirebaseTimestamp.now()

                    const userInitialData = {
                        created_at: timestamp,
                        email: email,
                        role: 'customer',
                        uid: uid,
                        updated_at: timestamp,
                        username: username
                    };

                    db.collection('users').doc(uid).set(userInitialData)
                        .then(() => {
                            dispatch(push('/'))
                        })
                }
            })
            .catch(e => {
                alert(e.message)
            })
    }
}
