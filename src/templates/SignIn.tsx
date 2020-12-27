import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../reducks/store/initialState";
import {signIn} from "../reducks/users/operations";

const SignIn = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: State) => state)
    console.log(selector.router)
    return (
        <div>
            <h2>サインイン</h2>
            <button onClick={() => {
                dispatch(signIn())
            }} >
                サインインする
            </button>
        </div>
    );
};

export default SignIn;
