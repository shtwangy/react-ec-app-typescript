import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {signIn, signUp} from "../reducks/users/operations";
import {PrimaryButton, TextInput} from "../components/UIKit";

const SignIn = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [])

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [])

    return (
        <div className='c-section-container'>
            <h2 className='u-text__headline u-text-center'>サインイン</h2>
            <div className='module-spacer--medium'></div>
            <TextInput
                fullWidth={true}
                label={'メールアドレス'}
                multiline={false}
                required={true}
                rows={1}
                value={email}
                type={'email'}
                onChange={inputEmail}
                variant={'standard'}
            />
            <TextInput
                fullWidth={true}
                label={'パスワード'}
                multiline={false}
                required={true}
                rows={1}
                value={password}
                type={'password'}
                onChange={inputPassword}
                variant={'standard'}
            />
            <div className='module-spacer--medium'></div>
            <div className='center'>
                <PrimaryButton
                    label={'サインイン'}
                    onClick={() => dispatch(signIn(email, password))}
                />
            </div>
        </div>
    );
};

export default SignIn;
