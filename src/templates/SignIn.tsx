import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";
import {State} from "../reducks/store/initialState";

const SignIn = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: State) => state)
    console.log(selector.router)
    return (
        <div>
            <h2>サインイン</h2>
            <button onClick={() => dispatch(push('/'))} >
                サインインする
            </button>
        </div>
    );
};

export default SignIn;
