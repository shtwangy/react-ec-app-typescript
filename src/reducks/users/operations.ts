import {signInAction, signOutAction} from "./actions";
import {push} from 'connected-react-router'
import {Dispatch} from "redux";
import firebase from "firebase";
import {auth, db, FirebaseTimestamp} from '../../firebase'
import {User} from './types'

export const listenAuthState = () => {
    return async (dispatch: Dispatch) => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                const uid = user.uid
                db.collection('users').doc(uid).get()
                    .then(res => {
                        const data = res.data() as User
                        dispatch(signInAction({
                            isSignedIn: true,
                            role: data.role,
                            uid: uid,
                            username: data.username
                        }))
                    })
            } else {
                dispatch(push('/sign-in'))
            }
        })
    }
}

export const resetPassword = (email: string) => {
    return async (dispatch: Dispatch) => {
        // validation TODO: メソッド化する
        if (email === '') {
            alert('必須項目が未入力です');
            return false;
        } else {
            auth.sendPasswordResetEmail(email).then(() => {
                alert('入力されたアドレスにパスワードリセット用のメールを送りました。');
                dispatch(push('/'));
            }).catch(() => {
                alert('パスワードリセットに失敗しました。');
            });
        }
    }
};

export const signIn = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        // validation check
        if (email === '' && password === '') {
            alert('必須項目が未入力です')
            return false
        }

        return auth.signInWithEmailAndPassword(email, password)
            .then((res: firebase.auth.UserCredential) => {
                const user = res.user
                if (user) {
                    const uid = user.uid
                    db.collection('users').doc(uid).get()
                        .then(res => {
                            const data = res.data() as User
                            dispatch(signInAction({
                                isSignedIn: true,
                                role: data.role,
                                uid: uid,
                                username: data.username
                            }))

                            dispatch(push('/'))
                        })
                }
            });
    }
}

export const signOut = () => {
    return async (dispatch: Dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch(signOutAction())
                dispatch(push('/sign-in'))
            })
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
            .then((res: firebase.auth.UserCredential) => {
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
