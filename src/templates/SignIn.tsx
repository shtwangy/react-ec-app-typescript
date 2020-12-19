import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

const SignIn = () => {
    const dispatch = useDispatch();
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
