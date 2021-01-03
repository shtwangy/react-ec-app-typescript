import React, { useCallback, useState } from "react";
import { TextInput, PrimaryButton } from "../components/UIKit";
import { resetPassword } from "../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const PasswordReset = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, []);

    return (
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">Reset Password</h2>
            <div className="module-spacer--medium" />
            <TextInput
                fullWidth={true}
                label={"メールアドレス"}
                multiline={false}
                required={true}
                rows={1}
                value={email}
                type={"email"}
                onChange={inputEmail}
                variant={'standard'}
            />
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton
                    label={"Reset Password"}
                    onClick={() => dispatch(resetPassword(email))}
                />
                <p className='p-link' onClick={() => dispatch(push('/sign-in'))}>サインイン画面に戻る</p>
            </div>
        </div>
    )
};

export default PasswordReset;
