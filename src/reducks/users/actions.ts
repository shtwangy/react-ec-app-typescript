interface UserState {
    uid: string
    username: string
}

export const SIGN_IN = 'SIGN_IN'
export const signInAction = (userState: UserState) => {
    return {
        type: SIGN_IN,
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username
        }
    }
}
