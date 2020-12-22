import {createSelector} from 'reselect'
import {State} from "../store/initialState";

const usersSelector = (state: State) => state.users;

export const  getUserId = createSelector(
    [usersSelector],
    state => state.uid
)

export const  getUsername = createSelector(
    [usersSelector],
    state => state.username
)

