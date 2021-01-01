import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getIsSignedIn } from "./reducks/users/selectors";
import { listenAuthState } from "./reducks/users/operations";
import {State} from "./reducks/store/initialState";

type Props = {
    children: React.ReactElement;
};

const Auth: React.FC<Props> = (props: Props) => {
    const dispatch = useDispatch();
    const selector = useSelector((state: State) => state);
    const isSignedIn = getIsSignedIn(selector);
    console.log(isSignedIn)

    const {children} = props
    useEffect(() => {
        if (!isSignedIn) {
            console.log('run listenAuthState')
            dispatch(listenAuthState());
        }
    }, []);

    if (!isSignedIn) {
        return <></>
    } else {
        return children;
    }
};

export default Auth;
