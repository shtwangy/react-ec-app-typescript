import React, {FC, useState, useCallback} from 'react';
import {PrimaryButton, TextInput} from "../components/UIKit";
import {useDispatch} from "react-redux";
import {signUp} from "../reducks/users/operations";
import {push} from "connected-react-router";

interface Props {
}

const SignUp: FC<Props> = (props: Props) => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [confirmPassword, setConfirmPassword] = useState('');

    const inputUsername = useCallback((e) => {
        setUsername(e.target.value)
    }, [])

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [])

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [])

    const inputConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value)
    }, [])

    return (
        <div className='c-section-container'>
            <h2 className='u-text__headline u-text-center'>アカウント登録</h2>
            <div className='module-spacer--medium'></div>
            <TextInput
                fullWidth={true}
                label={'ユーザー名'}
                multiline={false}
                required={true}
                rows={1}
                value={username}
                type={'text'}
                onChange={inputUsername}
                variant={'standard'}
            />
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
            <TextInput
                fullWidth={true}
                label={'パスワード（再確認）'}
                multiline={false}
                required={true}
                rows={1}
                value={confirmPassword}
                type={'password'}
                onChange={inputConfirmPassword}
                variant={'standard'}
            />
            <div className='module-spacer--medium'></div>
            <div className='center'>
                <PrimaryButton
                    label={'登録する'}
                    onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
                />
                <p className='p-link' onClick={() => dispatch(push('/sign-in'))}>すでにアカウントをお持ちの方はこちら</p>
            </div>
        </div>
    );
};

export default SignUp;
