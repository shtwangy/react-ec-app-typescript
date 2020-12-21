import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";
import {State} from "../reducks/store/initialState";
import {signInAction} from "../reducks/users/actions";

const SignIn = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: State) => state)
    console.log(selector.router)
    return (
        <div>
            <h2>サインイン</h2>
            <button onClick={() => {
                dispatch(signInAction({isSignedIn: true, uid: '0001', username: 'hoge'}))
                dispatch(push('/'))
            }} >
                サインインする
            </button>
        </div>
    );
};

export default SignIn;
