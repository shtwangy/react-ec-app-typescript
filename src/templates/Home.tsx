import React, {FC} from 'react';
import {getUserId} from "../reducks/users/selector";
import {State} from "../reducks/store/initialState";
import {useSelector} from "react-redux";

interface Props {
}

const Home: FC<Props> = (props: Props) => {
    const selector = useSelector((state: State) => state)
    const uid = getUserId(selector)
    return (
        <div>
            Home Template
            <p>{uid}</p>
        </div>
    );
};

export default Home;
