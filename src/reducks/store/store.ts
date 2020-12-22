import {createStore as reduxCreateStore, combineReducers, applyMiddleware} from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {History} from 'history'
import {UsersReducer} from '../users/reducers'
import thunk from 'redux-thunk'

const createStore = (history: History) => {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}

export default createStore
