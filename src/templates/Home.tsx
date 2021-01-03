import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {getUserId} from "../reducks/users/selectors";
import {getUsername} from "../reducks/users/selectors";
import {State} from "../reducks/store/initialState";
import {useSelector} from "react-redux";
import {signOut} from "../reducks/users/operations";

interface Props {
}

const Home: FC<Props> = (props: Props) => {
    const dispatch = useDispatch()
    const selector = useSelector((state: State) => state)
    const uid = getUserId(selector)
    const username = getUsername(selector)
    return (
        <div>
            Home Template
            <p>UID: {uid}</p>
            <p>ユーザー名: {username}</p>
            <button onClick={() => dispatch(signOut())}>サインアウト</button>
        </div>
    );
};

export default Home;
